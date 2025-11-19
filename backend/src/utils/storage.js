import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTACTS_FILE = path.join(__dirname, '../../data/contacts.json');

// お問い合わせデータを保存
export async function saveContact(contactData) {
  try {
    // dataディレクトリが存在しない場合は作成
    const dataDir = path.dirname(CONTACTS_FILE);
    await fs.mkdir(dataDir, { recursive: true });

    // 既存のデータを読み込む
    let contacts = [];
    try {
      const data = await fs.readFile(CONTACTS_FILE, 'utf-8');
      contacts = JSON.parse(data);
    } catch (error) {
      // ファイルが存在しない場合は空配列
      contacts = [];
    }

    // 新しいお問い合わせを追加
    const newContact = {
      id: Date.now(),
      ...contactData,
      timestamp: new Date().toISOString(),
      read: false,
    };

    contacts.unshift(newContact); // 最新のものを先頭に追加

    // ファイルに保存
    await fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2), 'utf-8');

    return newContact;
  } catch (error) {
    console.error('Failed to save contact:', error);
    throw error;
  }
}

// すべてのお問い合わせを取得
export async function getAllContacts() {
  try {
    const data = await fs.readFile(CONTACTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // ファイルが存在しない場合は空配列を返す
    return [];
  }
}

// お問い合わせを既読にする
export async function markAsRead(contactId) {
  try {
    const contacts = await getAllContacts();
    const index = contacts.findIndex(c => c.id === contactId);

    if (index !== -1) {
      contacts[index].read = true;
      await fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2), 'utf-8');
      return contacts[index];
    }

    return null;
  } catch (error) {
    console.error('Failed to mark contact as read:', error);
    throw error;
  }
}
