import { useState, useEffect } from 'react';

interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  read: boolean;
}

const Admin = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/imada-lab/contacts');
      const data = await response.json();

      if (data.success) {
        setContacts(data.data);
      } else {
        setError(data.error || 'データの取得に失敗しました');
      }
    } catch (err) {
      setError('通信エラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: number) => {
    try {
      const response = await fetch(`/api/imada-lab/contacts/${id}/read`, {
        method: 'PATCH',
      });
      const data = await response.json();

      if (data.success) {
        setContacts(contacts.map(c =>
          c.id === id ? { ...c, read: true } : c
        ));
      }
    } catch (err) {
      console.error('Failed to mark as read:', err);
    }
  };

  const handleContactClick = (contact: Contact) => {
    setSelectedContact(contact);
    if (!contact.read) {
      markAsRead(contact.id);
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">読み込み中...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">お問い合わせ管理</h1>
          <p className="text-gray-600 mt-2">
            全 {contacts.length} 件のお問い合わせ
            {contacts.filter(c => !c.read).length > 0 && (
              <span className="ml-2 text-red-600">
                （未読: {contacts.filter(c => !c.read).length} 件）
              </span>
            )}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {/* お問い合わせ一覧 */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h2 className="font-bold text-gray-900">お問い合わせ一覧</h2>
            </div>
            <div className="divide-y divide-gray-200 max-h-[calc(100vh-300px)] overflow-y-auto">
              {contacts.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  お問い合わせはまだありません
                </div>
              ) : (
                contacts.map((contact) => (
                  <div
                    key={contact.id}
                    onClick={() => handleContactClick(contact)}
                    className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedContact?.id === contact.id ? 'bg-blue-50' : ''
                    } ${!contact.read ? 'bg-yellow-50' : ''}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <p className="font-medium text-gray-900 truncate">
                            {contact.subject}
                          </p>
                          {!contact.read && (
                            <span className="flex-shrink-0 inline-block px-2 py-0.5 text-xs font-medium bg-red-100 text-red-800 rounded">
                              未読
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 truncate mt-1">
                          {contact.name} ({contact.email})
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {formatDate(contact.timestamp)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* 詳細表示 */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h2 className="font-bold text-gray-900">詳細</h2>
            </div>
            <div className="p-6">
              {selectedContact ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      件名
                    </label>
                    <p className="text-gray-900">{selectedContact.subject}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      お名前
                    </label>
                    <p className="text-gray-900">{selectedContact.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      メールアドレス
                    </label>
                    <p className="text-gray-900">
                      <a
                        href={`mailto:${selectedContact.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {selectedContact.email}
                      </a>
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      受信日時
                    </label>
                    <p className="text-gray-900">
                      {formatDate(selectedContact.timestamp)}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      お問い合わせ内容
                    </label>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p className="text-gray-900 whitespace-pre-wrap">
                        {selectedContact.message}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-12">
                  お問い合わせを選択してください
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
