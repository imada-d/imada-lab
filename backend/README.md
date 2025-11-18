# imada-lab Backend API

imada-labコーポレートサイトのバックエンドAPI

## 機能

- お問い合わせフォームの受付とメール送信
- レート制限（1時間に3回まで）
- バリデーション
- セキュリティ対策（Helmet、CORS）

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.example`を`.env`にコピーして、必要な値を設定してください。

```bash
cp .env.example .env
```

`.env`ファイルの内容:

```env
PORT=3000
FRONTEND_URL=http://localhost:5173

RESEND_API_KEY=your_resend_api_key_here
EMAIL_FROM=noreply@imada-lab.com
EMAIL_TO=contact@imada-lab.com
```

### 3. Resend APIキーの取得

1. [Resend](https://resend.com/)にアカウント登録
2. APIキーを発行
3. ドメイン認証（imada-lab.com）を設定
4. `.env`ファイルに APIキーを設定

## 開発環境での起動

```bash
npm run dev
```

サーバーは`http://localhost:3000`で起動します。

## 本番環境での起動

```bash
npm start
```

## APIエンドポイント

### POST /api/imada-lab/contact

お問い合わせフォームの送信

**リクエストボディ:**

```json
{
  "name": "山田太郎",
  "email": "yamada@example.com",
  "subject": "サービスについて",
  "message": "PoleNaviについて詳しく知りたいです..."
}
```

**レスポンス（成功時）:**

```json
{
  "success": true,
  "message": "お問い合わせを送信しました"
}
```

**レスポンス（エラー時）:**

```json
{
  "success": false,
  "error": "エラーメッセージ"
}
```

### GET /health

ヘルスチェック

**レスポンス:**

```json
{
  "status": "OK",
  "timestamp": "2025-01-18T12:00:00.000Z"
}
```

## セキュリティ機能

- **Helmet**: セキュリティヘッダーの設定
- **CORS**: オリジン制限
- **レート制限**: 1時間に3回まで
- **バリデーション**: 入力値の検証

## ディレクトリ構成

```
backend/
├── src/
│   ├── index.js           # メインサーバーファイル
│   ├── routes/
│   │   └── contact.js     # お問い合わせルーター
│   └── middleware/
│       ├── rateLimiter.js # レート制限
│       └── validator.js   # バリデーション
├── .env.example           # 環境変数のサンプル
├── package.json
└── README.md
```
