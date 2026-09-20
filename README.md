# 漢字凝集解析

入力した漢字に類似する漢字を、k-meansクラスタリングの結果から検索するNuxt 3アプリケーションです。JIS第1水準・第2水準の6355字種を対象にしています。

## 必要な環境

- Node.js 24.2.0以上
- Yarn 1.22.19

Node.jsの指定は`.node-version`と`.tool-versions`に記載しています。

## セットアップ

```bash
yarn install --frozen-lockfile
cp .env.example .env
yarn dev
```

開発サーバーは通常 `http://localhost:3000` で起動します。Google AnalyticsとGoogle AdSenseを使用しないローカル開発では、`.env`の値を空にできます。

## コマンド

```bash
yarn dev        # 開発サーバー
yarn lint       # ESLint
yarn typecheck  # Vue / TypeScript型検査
yarn test       # Vitest
yarn build      # Node.js向け本番ビルド
yarn generate   # 静的生成
yarn start      # ビルド結果のプレビュー
```

pull requestではinstall、lint、typecheck、test、buildがGitHub Actionsで実行されます。

## 環境変数

| 変数 | 用途 |
| --- | --- |
| `NUXT_PUBLIC_GOOGLE_ANALYTICS_ID` | Google Analyticsの測定ID。空の場合は無効 |
| `NUXT_PUBLIC_GOOGLE_ADSENSE_ID` | Google AdSenseのパブリッシャーID。空の場合はスクリプトを読み込まない |

## 構成

- Nuxt 3 / Vue 3
- Nuxt UI 3 / Tailwind CSS 4
- VueUse
- Vitest / Nuxt Test Utils
- Vite PWA

ブラウザからの `/kanji-clustering-api/**` リクエストは、Nitroのプロキシを通じて外部の漢字クラスタリングAPIへ転送されます。

## 移行状況

Vue 2 / Nuxt 2からの移行作業は、[GitHub Issue #7](https://github.com/yudukikun5120/Kanji-Clustering/issues/7) で追跡しています。
