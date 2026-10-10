# 未來科技啟航：AIoT 推廣科學營｜宣傳網站

國立臺北教育大學執行的國科會大眾科學教育計畫「未來科技啟航：AIoT 推廣科學營」的宣傳網站，介紹計畫內容、AIoT 科普知識、各校活動成果與最新消息。

- 網址：<https://aiot-camp-web.vercel.app>（舊網站，內容不會再更新；新網站上線後會關閉）
- 計畫主持人：吳佳娣助理教授

> 📘 **接手維護請先看 [HANDOVER.md](HANDOVER.md)**：需要重新部署一個你們自己的網站，步驟見 [第 8 節](HANDOVER.md#8-接手建立你們自己的網站)。

## 技術棧

- [Next.js](https://nextjs.org) 16.3（App Router）＋ React 19 ＋ TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4（沒有 `tailwind.config.js`，設定寫在 `app/globals.css`）
- [lucide-react](https://lucide.dev/icons/) 圖示
- 字型：jf open 粉圓（SIL OFL）
- 部署：Vercel

網站是純靜態的，沒有資料庫或後台，所有內容都寫在程式碼裡。

⚠️ Next.js 16 與網路上多數舊版教學不同，請以 `node_modules/next/dist/docs/` 內的官方文件為準。

## 本機開發

需要 Node.js 20 以上。

```bash
npm install      # 安裝套件
npm run dev      # 開發模式：http://localhost:3000
npm run build    # 正式打包，push 前先確認能過
npm run lint     # 程式碼檢查
```

## 頁面

| 網址 | 檔案 | 內容 |
| --- | --- | --- |
| `/` | `app/page.tsx` | 首頁 |
| `/about` | `app/about/page.tsx` | 關於計畫 |
| `/learn` | `app/learn/page.tsx` | 認識 AIoT（科普影片） |
| `/hands-on` | `app/hands-on/page.tsx` | AIoT 動手玩 |
| `/programs` | `app/programs/page.tsx` | 活動成果（各校照片牆） |
| `/news` | `app/news/page.tsx` | 最新消息、媒體報導 |
| `/contact` | `app/contact/page.tsx` | 聯絡我們 |

共用元件在 `components/`，SEO 設定在 `lib/seo.ts`，圖片與字型在 `public/`。完整的資料夾說明見 [HANDOVER.md](HANDOVER.md#4-資料夾結構)。

## 部署

部署在 Vercel，push 到 `main` 後自動部署。接手時要先建立自己的 Vercel 專案，詳見 [HANDOVER.md](HANDOVER.md#8-接手建立你們自己的網站)。
