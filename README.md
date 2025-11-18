# imada-lab コーポレートサイト

imada-labが開発する各種サービスを紹介するポートフォリオサイト

## サービス紹介

- **PoleNavi**: 電柱位置共有アプリ
- **電気屋マイスター**: 電気工事の学習サイト＆アプリ

## 技術スタック

### フロントエンド
- React 19.1.1
- TypeScript
- Vite
- React Router
- Tailwind CSS

## 開発環境のセットアップ

### 前提条件
- Node.js (推奨: v18以上)
- npm または yarn

### インストール

```bash
# リポジトリのクローン
git clone https://github.com/imada-d/imada-lab.git
cd imada-lab

# 依存関係のインストール
cd frontend
npm install
```

### 開発サーバーの起動

```bash
cd frontend
npm run dev
```

開発サーバーが `http://localhost:5173/` で起動します。

### ビルド

```bash
cd frontend
npm run build
```

ビルド結果は `frontend/dist/` に出力されます。

## プロジェクト構成

```
labhp/
├── frontend/              # フロントエンドアプリケーション
│   ├── src/
│   │   ├── components/   # 共通コンポーネント
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ServiceCard.tsx
│   │   ├── pages/        # ページコンポーネント
│   │   │   ├── Home.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Privacy.tsx
│   │   │   └── Terms.tsx
│   │   ├── App.tsx       # ルーティング設定
│   │   └── main.tsx
│   └── package.json
└── README.md
```

## ページ一覧

- `/` - トップページ (サービスカード表示)
- `/contact` - お問い合わせページ
- `/privacy` - プライバシーポリシー
- `/terms` - 利用規約

## バックエンド

お問い合わせフォームのAPI実装は別途必要です。

### 必要なAPIエンドポイント

- `POST /api/imada-lab/contact` - お問い合わせ送信

## ライセンス

Copyright © 2025 imada-lab
