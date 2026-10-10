# AIoT 推廣科學營網站：交接文件

> 給接手維護的學弟妹。看完這份文件，你應該可以把網站跑起來、改內容、上線新版本。
> 標 **【待補】** 的地方要請交接人（學長姐）填寫或當面交代。

---

## 1. 這個網站是什麼

「未來科技啟航：AIoT 推廣科學營」的宣傳網站。這是國立臺北教育大學執行的國科會大眾科學教育計畫，計畫主持人是吳佳娣助理教授。

- 正式網址：<https://aiot-camp-web.vercel.app>
- 原始碼：<https://github.com/howie960018/aiot-camp-web>
- 網站是**純靜態**的：沒有資料庫、沒有後台、沒有登入。所有文字和圖片都直接寫在程式碼裡，要改內容就得改程式碼，再重新部署。

## 2. 技術棧

| 項目 | 版本 / 說明 |
| --- | --- |
| 框架 | **Next.js 16.3**（App Router） |
| UI | React 19 + **Tailwind CSS v4** |
| 圖示 | [lucide-react](https://lucide.dev/icons/) |
| 語言 | TypeScript |
| 部署 | Vercel |
| 字型 | jf open 粉圓（`public/jf-openhuninn-2.1.ttf`，SIL OFL 開源授權） |

⚠️ **Next.js 16 跟網路上大部分教學（13、14 版）有差異。** 查資料時以專案內附的官方文件為準：`node_modules/next/dist/docs/`（`npm install` 之後才會出現）。用 AI 助手寫程式時，`AGENTS.md` 會自動提醒它這件事。

Tailwind v4 **沒有** `tailwind.config.js`，設定和全站色票都寫在 `app/globals.css`。

## 3. 第一次把專案跑起來

需要先安裝：
- [Node.js](https://nodejs.org/) 20 以上（交接時用的是 v24）
- Git

```bash
git clone https://github.com/howie960018/aiot-camp-web.git
cd aiot-camp-web
npm install        # 安裝套件，只有第一次或 package.json 有變動時才需要
npm run dev        # 開發模式，打開 http://localhost:3000
```

開發模式下存檔，瀏覽器會自動更新。

其他指令：

```bash
npm run build      # 正式打包。push 之前先跑一次，能過才代表 Vercel 也能過
npm run lint       # 程式碼檢查（目前有 20 個 warning、0 個 error，都不影響上線）
```

## 4. 資料夾結構

```
app/                      ← 每個資料夾 = 一個網址
├── layout.tsx            全站共用外框：<html>、全站 SEO、Google 驗證碼
├── globals.css           全站樣式：字型、色票、手機版字級調整
├── page.tsx              首頁  /
├── about/page.tsx        關於計畫  /about
├── learn/page.tsx        認識 AIoT  /learn（含 YouTube 科普影片）
├── hands-on/page.tsx     AIoT 動手玩  /hands-on
├── programs/page.tsx     活動成果  /programs（含各校活動照片牆）
├── news/
│   ├── layout.tsx        這頁的 SEO 設定（原因見第 6 節）
│   └── page.tsx          最新消息  /news（含媒體報導連結）
├── contact/
│   ├── layout.tsx        這頁的 SEO 設定
│   └── page.tsx          聯絡我們  /contact（含合作洽詢表單、Google 地圖）
├── opengraph-image.tsx   分享到 FB / LINE 時顯示的預覽圖（程式自動產生）
├── sitemap.ts            自動產生 /sitemap.xml
└── robots.ts             自動產生 /robots.txt
components/
└── MainNav.tsx           頂部導覽列（所有頁面共用）
lib/
└── seo.ts                網站名稱、網址、各頁 SEO 的共用函式
public/                   靜態檔案，放在這裡的檔案網址就是 /檔名
├── 圖片1.png ~ 圖片54.*  活動照片
├── National_Taipei_University_of_Education_logo.svg.webp   校徽
└── jf-openhuninn-2.1.ttf 字型
```

### 每一頁的寫法

每個 `page.tsx` 的結構都一樣：

1. **最上方是資料陣列**，例如 `const newsItems = [...]`、`const photoGroups = [...]`。
2. **下方是畫面（JSX）**，用 `.map()` 把陣列渲染成卡片。

所以**改內容時，通常只要動檔案最上面的陣列，不用碰下面的畫面。**

## 5. 常見維護任務

### 5.1 新增一則最新消息

改 `app/news/page.tsx` 的 `newsItems`，新的放最前面：

```ts
{
  title: '標題',
  category: '活動紀錄',      // 只能填「活動紀錄」或「媒體報導」，否則篩選按鈕篩不到
  date: '2026.10.10',
  summary: '一兩句摘要。',
},
```

⚠️ 首頁的「最新消息」區塊是**另一份**資料：`app/page.tsx` 的 `newsCards`。兩邊要分別更新。

### 5.2 新增媒體報導連結

改 `app/news/page.tsx` 的 `mediaReports`：

```ts
{ title: '報導標題', source: '副標或來源', url: 'https://...' },
```

### 5.3 新增活動照片 / 新的學校

1. 把照片放進 `public/`。
   - **建議先把照片壓到 500 KB 以下**（可用 [Squoosh](https://squoosh.app/)），原圖動輒好幾 MB 會拖慢網站。
   - 沿用編號命名（`圖片55.jpg`、`圖片56.jpg`……），或改用英文檔名。
2. 改 `app/programs/page.tsx` 的 `photoGroups`，新增一組：

```ts
{
  school: '某某市某某國小',      // 不能跟其他組重複（它被當作 React 的 key）
  title: 'AIOT 科普營',
  description: '一句話描述這次活動。',
  accent: 'sky',                // 只能用：sky / emerald / amber / violet / rose / cyan / indigo
  photos: [
    { number: 55, file: '圖片55.jpg', caption: '照片說明，同時會當作圖片的替代文字 alt。' },
  ],
},
```

`number` 要全站唯一，`file` 要和 `public/` 裡的檔名**完全一致**（包含副檔名大小寫）。

⚠️ 上傳學生照片前，先確認已取得肖像權同意。

### 5.4 新增 / 更換 YouTube 影片

影片 ID 就是網址 `youtube.com/watch?v=` 後面那串，例如 `Lb0AgFcqCy0`。

- 認識 AIoT 頁：`app/learn/page.tsx` 的 `scienceVideos`
- 首頁精選影片：`app/page.tsx` 的 `featuredVideo`

### 5.5 修改聯絡資訊

`app/contact/page.tsx` 最上方的 `contacts`（主持人、執行單位、服務時間）和 `schoolFacts`（地址、電話）。

### 5.6 新增一個頁面

假設要新增 `/gallery`：

1. 建立 `app/gallery/page.tsx`，複製一個現有頁面（例如 `hands-on/page.tsx`）來改最快。
2. 在 `lib/seo.ts` 的 `sitePaths` 加上 `'/gallery'`，sitemap 才會收錄。
3. 在 `components/MainNav.tsx` 的 `navItems` 加上選單項目。
4. 頁面裡呼叫 `<MainNav current="gallery" ... />`，`current` 要和 `navItems` 的 `key` 一致，選單才會正確反白。
5. 檔案最上方要匯出 SEO 設定：

```ts
export const metadata = pageMetadata({
  title: '頁面標題',
  description: '給 Google 看的描述，約 80～120 字。',
  path: '/gallery',
});
```

### 5.7 改全站顏色或字型

`app/globals.css` 的 `:root`。主色是 `#1E6091`。注意：很多元件直接把顏色寫在 class 裡（例如 `bg-[#1E6091]`），改主色時要全專案搜尋一起換。

## 6. 容易踩的坑

1. **頁尾（footer）在 7 個頁面各複製了一份。** 改頁尾的連結或版權年份時，`app/page.tsx` 和 `app/*/page.tsx` 每個檔案都要改。建議有空時抽成 `components/SiteFooter.tsx`。

2. **聯絡我們的表單沒有真的送出去。** 按下送出只會 `console.log`，然後顯示「已送出」，**資料不會寄到任何地方**。如果要真的收件，需要串接表單服務（例如 [Formspree](https://formspree.io/)、Google 表單）或寫 API。在那之前，對外請引導大家用電話或 Email 聯絡。

3. **`news/` 和 `contact/` 的 SEO 寫在 `layout.tsx`，不在 `page.tsx`。** 這兩頁開頭有 `'use client'`（因為用到按鈕篩選、表單），而 client component 不能匯出 `metadata`，所以放在同資料夾的 `layout.tsx`。其他頁面直接寫在 `page.tsx`。

4. **手機版字級被 `globals.css` 用 `!important` 強制覆寫。** 在 640px 以下，`text-sm`、`text-lg`、`px-4` 等 class 的實際大小和 Tailwind 預設不同。手機上看起來「改了 class 卻沒變」時，先去查 `globals.css` 最下面的 `@media` 區塊。

5. **重複的資料：** 服務縣市清單 `regionList`／`regions` 在 `app/page.tsx` 和 `app/about/page.tsx` 各有一份；最新消息見 5.1。改的時候兩邊都要改。

6. **頁尾「隱私權說明」目前連到 `/contact`**，沒有真正的隱私權頁面。

7. **字型檔將近 5 MB**，是網站最大的檔案。不要再加新的字型檔。

## 7. 部署（上線）

網站部署在 Vercel，正常流程是：

```
改程式 → npm run build 確認能過 → git commit → git push 到 main → Vercel 自動部署（約 1～2 分鐘）
```

部署失敗時，到 Vercel 後台的 Deployments 頁面看錯誤訊息。大部分的錯誤在本機跑 `npm run build` 就會出現。

> **【待補】** 請學長姐確認：Vercel 專案是綁在哪個帳號？push 到 main 是否確實會自動部署？

## 8. 帳號與權限交接清單

以下權限目前都在學長姐的個人帳號底下，交接時要轉移，或加學弟妹為協作者：

| 項目 | 目前狀態 | 交接方式 |
| --- | --- | --- |
| GitHub repo | `howie960018/aiot-camp-web` | Settings → Collaborators 加人，或 Transfer 給實驗室 / 學弟妹 |
| Vercel 專案 | **【待補】** | 邀請成員，或 Transfer Project |
| Google Search Console | 驗證碼寫在 `app/layout.tsx` 的 `verification.google` | 在 Search Console「設定 → 使用者和權限」新增擁有者。**不要刪除那行驗證碼**，刪了會失去網站驗證 |
| 網域 | 目前使用 Vercel 免費網域 `*.vercel.app` | 若日後改用自訂網域，要同步修改 `lib/seo.ts` 的 `SITE_URL` |

> 建議：把 repo 和 Vercel 轉到實驗室或計畫的共用帳號，以後交接就不用再搬一次。

## 9. 已知待辦（有空可以做）

- [ ] 合作洽詢表單串接真正的寄送服務（見第 6 節第 2 點）
- [ ] 把 7 份重複的頁尾抽成共用元件
- [ ] 首頁和最新消息頁的消息資料改成共用同一份
- [ ] 和計畫團隊確認最新消息（`newsItems`）、活動紀錄（`programs/page.tsx` 的 `records`、`media`）是不是真實資料。如果是建站時放的示意內容，要換掉
- [ ] 清掉 `npm run lint` 的 warning（未使用的 import、`<img>` 改用 `next/image`）
- [ ] 建立隱私權說明頁
- [ ] 把 `README.md` 換成專案說明（目前還是 create-next-app 的預設內容）

## 10. 聯絡人

| 角色 | 姓名 | 聯絡方式 |
| --- | --- | --- |
| 前任維護者 | **【待補】** | **【待補】** |
| 計畫主持人 | 吳佳娣助理教授 | **【待補】** |
