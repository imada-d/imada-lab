const Privacy = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            プライバシーポリシー
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              imada-lab（以下「当方」といいます）は、当サイトの利用者（以下「ユーザー」といいます）のプライバシーを尊重し、個人情報の保護に努めます。本プライバシーポリシーは、当サイトにおける個人情報の取り扱いについて定めるものです。
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 収集する情報</h2>
              <p className="text-gray-700 mb-3">当サイトでは、以下の情報を収集する場合があります。</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>お問い合わせフォームに入力された情報（お名前、メールアドレス、お問い合わせ内容）</li>
                <li>アクセスログ情報（IPアドレス、ブラウザの種類、アクセス日時など）</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 情報の利用目的</h2>
              <p className="text-gray-700 mb-3">収集した情報は、以下の目的で利用します。</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>お問い合わせへの対応</li>
                <li>サービスの提供・改善</li>
                <li>サイトの利用状況の分析</li>
                <li>重要なお知らせの配信</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 情報の第三者提供</h2>
              <p className="text-gray-700">
                当方は、以下の場合を除き、ユーザーの個人情報を第三者に提供することはありません。
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-3">
                <li>ユーザーの同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookie（クッキー）について</h2>
              <p className="text-gray-700">
                当サイトでは、サービスの利便性向上のためにCookieを使用する場合があります。Cookieの使用を希望しない場合は、ブラウザの設定でCookieを無効にすることができます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. アクセス解析ツール</h2>
              <p className="text-gray-700">
                当サイトでは、サイトの利用状況を把握するため、Google Analyticsなどのアクセス解析ツールを使用する場合があります。これらのツールは、Cookieを使用してユーザーの情報を収集します。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. 個人情報の管理</h2>
              <p className="text-gray-700">
                当方は、個人情報の漏洩、紛失、破損等を防止するため、適切な安全管理措置を講じます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. プライバシーポリシーの変更</h2>
              <p className="text-gray-700">
                当方は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点で効力を生じるものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. お問い合わせ</h2>
              <p className="text-gray-700">
                本プライバシーポリシーに関するお問い合わせは、お問い合わせフォームよりご連絡ください。
              </p>
            </section>

            <div className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-sm">制定日: 2025年1月1日</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
