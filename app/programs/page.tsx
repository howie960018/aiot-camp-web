import Image from 'next/image';
import { Award, BookOpen, CalendarRange, Camera, Globe2, Newspaper, Sparkles, Users } from 'lucide-react';
import { MainNav } from '../../components/MainNav';

const programs = [
  {
    icon: BookOpen,
    title: 'AIoT 體驗營',
    text: '適合初次接觸 AIoT 的學童，從生活情境出發，帶領他們理解感測器與動作資料。',
  },
  {
    icon: Sparkles,
    title: 'AIoT 探索營',
    text: '以任務挑戰與實作設計為中心，讓學生透過程式設計與判斷規則完成作品。',
  },
  {
    icon: Award,
    title: 'AIoT 科普營',
    text: '強調親子互動與生活案例，讓參與者透過實作理解 AI、IoT 和 AIoT 的關係。',
  },
];

const records = [
  {
    title: '智慧牙刷體驗 / AIoT 體驗營',
    date: '2026.03.12',
    place: '臺北市',
    text: '學生透過感測器與 AI 模型完成動作辨識，讓刷牙動作也能被資料化與視覺化。',
  },
  {
    title: '智慧家庭任務挑戰 / AIoT 探索營',
    date: '2026.04.17',
    place: '新北市',
    text: '孩子設計居家照明與警示系統，透過 Micro:bit 與環境感測器完成互動任務。',
  },
  {
    title: 'AIoT 公開展覽 / 作品展示',
    date: '2026.05.26',
    place: '國立臺北教育大學',
    text: '學生與家長一起參與展示，透過作品呈現與互動操作理解 AIoT 的創意應用。',
  },
];

const media = [
  '科技新聞：AIoT 科普活動走進校園',
  '地方報導：AIoT 讓孩子從生活實作中理解科技',
  '教育專題：從感測器到 AI 判斷的學習轉化',
];

const photoGroups = [
  {
    school: '台北市博嘉國小',
    title: 'AIOT 科普營',
    description: '從智慧牙齒模型到 micro:bit 組裝，學生在課堂中練習觀察、提問與動手實作。',
    accent: 'sky',
    photos: [
      { number: 1, file: '圖片1.png', caption: '手持牙齒模型的大合照，記錄 AIOT 科普營的學習起點。' },
      { number: 2, file: '圖片2.png', caption: '師生手持牙齒模型合影，展現課程中的互動成果。' },
      { number: 3, file: '圖片3.png', caption: '學生在電腦前組裝 micro:bit，螢幕顯示牙齒衛教簡報。' },
      { number: 4, file: '圖片4.png', caption: '四位學童手持小禮物，在活動布條前開心合照。' },
      { number: 5, file: '圖片5.png', caption: '學生們在電腦桌前專注組裝 micro:bit 元件。' },
      { number: 6, file: '圖片6.png', caption: '課堂問答時間，學生舉手參與互動。' },
    ],
  },
  {
    school: '高雄市月美國小',
    title: 'AI 體驗營',
    description: '以小木屋模型、鏡頭與感測器為學習媒介，讓孩子從程式積木開始探索 AI 應用。',
    accent: 'emerald',
    photos: [
      { number: 7, file: '圖片7.png', caption: '全體師生在活動布條前大合照，留下 AI 體驗營紀念。' },
      { number: 8, file: '圖片8.png', caption: '兩位學童操作小木屋感應器與鏡頭進行測試。' },
      { number: 9, file: '圖片9.png', caption: '助教在學童身旁指導電腦積木程式操作。' },
      { number: 10, file: '圖片10.png', caption: '兩位學童在小木屋模型前合作操作與測試。' },
      { number: 11, file: '圖片11.png', caption: '師生與學童小組在布條前合照，分享活動成果。' },
      { number: 12, file: '圖片12.png', caption: '電腦教室全景，學童在座位上操作電腦。' },
      { number: 13, file: '圖片13.png', caption: '兩位學童操作鏡頭，對準小木屋進行辨識。' },
      { number: 14, file: '圖片14.png', caption: '學童開心組裝並調整小木屋屋頂。' },
      { number: 15, file: '圖片15.png', caption: '助教在黑板前指導，學生觀看 micro:bit 機器學習專案。' },
      { number: 16, file: '圖片16.png', caption: '兩位學童合力測試小木屋裝置的感測功能。' },
    ],
  },
  {
    school: '嘉義縣更寮國小',
    title: 'AI 體驗營',
    description: '透過智慧牙刷與動作錄製，學生實際感受感測資料如何被電腦讀取與判斷。',
    accent: 'amber',
    photos: [
      { number: 17, file: '圖片17.png', caption: '全體師生手持活動布條大合照。' },
      { number: 18, file: '圖片18.png', caption: '學童口含牙刷進行動作錄製測試。' },
      { number: 19, file: '圖片19.png', caption: '兩位學童操作大牙齒模型與感測器。' },
      { number: 20, file: '圖片20.png', caption: '學童看著螢幕倒數，進行程式測試。' },
      { number: 21, file: '圖片21.png', caption: '學童手持 micro:bit 板子微笑展示學習成果。' },
      { number: 22, file: '圖片22.png', caption: '學童坐在電腦前等待動作錄製。' },
      { number: 23, file: '圖片23.jpg', caption: '學童含著牙刷操作滑鼠，監看螢幕上的波形。' },
      { number: 24, file: '圖片24.jpg', caption: '學童手戴感測器，專注操作電腦完成測試。' },
    ],
  },
  {
    school: '台中市永安國小',
    title: 'AIOT 探索活動',
    description: '從戶外團體活動到室內程式設計，學生以平板、電腦與模型完成多元實作任務。',
    accent: 'violet',
    photos: [
      { number: 25, file: '圖片25.png', caption: '戶外遊樂場樹下的全體師生大合照。' },
      { number: 26, file: '圖片26.png', caption: '室內課堂中的師生合照，記錄團隊學習時光。' },
      { number: 27, file: '圖片27.png', caption: '學童使用平板與電腦搭配學習積木程式。' },
      { number: 28, file: '圖片28.png', caption: '學童在平板上拖曳積木程式碼。' },
      { number: 29, file: '圖片29.png', caption: '兩位學童共同操作大牙齒模型與電腦。' },
      { number: 30, file: '圖片30.png', caption: '學童開心高舉大牙齒模型合照。' },
      { number: 31, file: '圖片31.png', caption: '學童拿著牙刷，在大牙齒模型前模擬刷牙。' },
      { number: 32, file: '圖片32.png', caption: '學童手持 micro:bit，連接電腦進行操作。' },
      { number: 33, file: '圖片33.png', caption: '學生們在電腦前專注組裝電子元件。' },
      { number: 34, file: '圖片34.png', caption: '學童低頭專注設定手中的 micro:bit。' },
    ],
  },
  {
    school: '台中大里國小',
    title: 'AIOT 實作課程',
    description: '小組合作觀察小木屋裝置，從紙本學習單、程式積木到 AI Lens 辨識逐步完成任務。',
    accent: 'rose',
    photos: [
      { number: 35, file: '圖片35.png', caption: '三位學童共同組裝小木屋上的感測模組。' },
      { number: 36, file: '圖片36.png', caption: '學童在電腦教室座位上書寫紙本講義。' },
      { number: 37, file: '圖片37.png', caption: '學童在電腦前完成學習單。' },
      { number: 38, file: '圖片38.png', caption: '三位學童圍著小木屋俯身觀察零件。' },
      { number: 39, file: '圖片39.png', caption: '助教在學童身後指導程式積木操作。' },
      { number: 40, file: '圖片40.png', caption: '學童在課堂中舉手發問，主動交流想法。' },
      { number: 41, file: '圖片41.png', caption: '學童手拿紅色小球，在小木屋鏡頭前測試辨識。' },
      { number: 42, file: '圖片42.png', caption: '學童拿著色卡與 Smart AI Lens 進行辨識測試。' },
    ],
  },
  {
    school: '鼻頭國民小學',
    title: 'AIOT 科普營',
    description: '學童以小木屋模型為核心，練習接線、觀察結構並測試鏡頭與感測器的運作。',
    accent: 'cyan',
    photos: [
      { number: 43, file: '圖片43.png', caption: '兩位學童在小木屋前操作鏡頭與線路。' },
      { number: 44, file: '圖片44.png', caption: '學童坐在 Acer 筆電前觀看程式畫面。' },
      { number: 45, file: '圖片45.png', caption: '課堂小組活動，桌上擺放多個小木屋模型。' },
      { number: 46, file: '圖片46.png', caption: '學童俯身專注檢視小木屋側面構造。' },
      { number: 47, file: '圖片47.png', caption: '兩位學童對著鏡頭比 YA 微笑合照。' },
      { number: 48, file: '圖片48.png', caption: '兩位學童合力調整小木屋屋頂上的感測器。' },
    ],
  },
  {
    school: '新北市正義國小',
    title: 'AIOT 程式實作活動',
    description: '從 micro:bit 接線、程式撰寫到錄製測試，學童完整走過一次 AIOT 專案實作流程。',
    accent: 'indigo',
    photos: [
      { number: 49, file: '圖片49.jpg', caption: '俯拍學童連接小木屋與 micro:bit 線路。' },
      { number: 50, file: '圖片50.jpg', caption: '學員在電腦教室排排坐，撰寫程式。' },
      { number: 51, file: '圖片51.jpg', caption: '兩位學童於雙螢幕前進行基本程式練習。' },
      { number: 52, file: '圖片52.jpg', caption: '助教在學童身旁觀看螢幕，協助測試程式。' },
      { number: 53, file: '圖片53.jpg', caption: '助教與學童看著螢幕進行動作錄製。' },
      { number: 54, file: '圖片54.png', caption: '全體師生手持小木屋作品與獎品，在布條前合影。' },
    ],
  },
];

const accentClasses: Record<string, { eyebrow: string; border: string; badge: string }> = {
  sky: { eyebrow: 'text-sky-600', border: 'border-sky-200', badge: 'bg-sky-100 text-sky-700' },
  emerald: { eyebrow: 'text-emerald-600', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700' },
  amber: { eyebrow: 'text-amber-600', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-700' },
  violet: { eyebrow: 'text-violet-600', border: 'border-violet-200', badge: 'bg-violet-100 text-violet-700' },
  rose: { eyebrow: 'text-rose-600', border: 'border-rose-200', badge: 'bg-rose-100 text-rose-700' },
  cyan: { eyebrow: 'text-cyan-600', border: 'border-cyan-200', badge: 'bg-cyan-100 text-cyan-700' },
  indigo: { eyebrow: 'text-indigo-600', border: 'border-indigo-200', badge: 'bg-indigo-100 text-indigo-700' },
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7fbff_0%,#f2f7ff_100%)] text-slate-700">
      <MainNav current="programs" ctaHref="/news" ctaLabel="最新消息" />

      <main>
        <section className="px-4 pb-16 pt-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">活動與成果</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">每一次活動，都是一次新的發現</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
              從第一次接觸感測器，到完成 AIoT 作品，學生在每個活動中都親自觀察、測試與修正，逐步把想法轉化為實際成果。
            </p>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">營隊介紹</p>
              <h3 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">依照學習階段設計不同型態的活動</h3>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {programs.map((item) => (
                <article key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_36px_rgba(15,23,42,0.05)]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mb-3 text-2xl font-black text-slate-900">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">活動紀錄</p>
              <h3 className="mt-4 text-3xl font-black sm:text-4xl">讓學習歷程被看見</h3>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {records.map((record) => (
                <article key={record.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-sky-300">
                    <CalendarRange className="h-4 w-4" />
                    {record.date}
                  </div>
                  <h4 className="mb-3 text-2xl font-black text-white">{record.title}</h4>
                  <div className="mb-4 flex items-center gap-2 text-sm text-slate-300">
                    <Users className="h-4 w-4" />
                    {record.place}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-300">{record.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="activity-gallery-title">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">校園活動影像</p>
              <h3 id="activity-gallery-title" className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
                看見每一所學校的 AIoT 學習現場
              </h3>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                依學校與營隊整理活動照片，從團體合影、課堂互動到作品測試，完整記錄孩子把想法做出來的過程。
              </p>
            </div>

            <div className="space-y-20">
              {photoGroups.map((group) => {
                const accent = accentClasses[group.accent];
                const gallery = group.photos;

                return (
                  <section key={group.school} aria-labelledby={`gallery-${gallery[0].number}`}>
                    <div className="mb-7 flex flex-col gap-4 border-l-4 border-slate-900 pl-5 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className={`text-sm font-bold uppercase tracking-[0.16em] ${accent.eyebrow}`}>{group.school}</p>
                        <h4 id={`gallery-${gallery[0].number}`} className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
                          {group.title}
                        </h4>
                      </div>
                      <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-right">{group.description}</p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {gallery.map((photo) => (
                        <figure key={photo.number} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(15,23,42,0.1)]">
                          <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                            <Image
                              src={`/${photo.file}`}
                              alt={`${group.school}${group.title}，圖片${photo.number}：${photo.caption}`}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover transition duration-500 group-hover:scale-105"
                            />
                          </div>
                          <figcaption className="p-4 text-sm leading-relaxed text-slate-600">{photo.caption}</figcaption>
                        </figure>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">公開展覽與成果交流</p>
              <h3 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">將作品與創意帶給更多人看見</h3>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)] sm:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <Camera className="h-6 w-6 text-emerald-600" />
                  <h4 className="text-2xl font-black text-slate-900">公開展覽</h4>
                </div>
                <p className="text-base leading-relaxed text-slate-600">
                  透過作品展示與互動體驗，讓參觀者親自觀察 AIoT 如何從感測資料、AI 判斷到裝置反應，將科技概念轉化為可理解的體驗內容。
                </p>
              </div>

              <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)] sm:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <Globe2 className="h-6 w-6 text-sky-600" />
                  <h4 className="text-2xl font-black text-slate-900">成果交流會</h4>
                </div>
                <p className="text-base leading-relaxed text-slate-600">
                  學生透過分享與交流，說明作品的設計動機、運作流程與修正過程，培養溝通、展示與反思能力。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f9ff] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">媒體報導</p>
              <h3 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">更廣泛地分享孩子的學習故事</h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {media.map((item) => (
                <div key={item} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_14px_32px_rgba(15,23,42,0.04)]">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                    <Newspaper className="h-5 w-5" />
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[32px] bg-gradient-to-r from-sky-600 via-blue-600 to-violet-600 p-8 text-center text-white shadow-[0_28px_50px_rgba(37,99,235,0.18)] sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-100">成果展示</p>
            <h3 className="mt-4 text-3xl font-black sm:text-4xl">從好奇，到實作，再到分享</h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-sky-50">
              每個作品與每次活動，都有孩子們的觀察、探索和突破。這些成果不只是展示，而是讓更多人看見科技學習的力量。
            </p>
            <a href="/news" className="mt-8 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-base font-bold text-sky-700 transition hover:bg-sky-50">
              查看最新消息
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-slate-300">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_repeat(5,minmax(0,1fr))]">
            <div className="lg:pr-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center">
                  <img src="/National_Taipei_University_of_Education_logo.svg.webp" alt="國立臺北教育大學校徽" className="h-9 w-9 object-contain" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300">Future Tech</p>
                  <p className="mt-1 text-lg font-black text-white">未來科技啟航：AIoT推廣科學營</p>
                </div>
              </div>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-300">
                點亮偏鄉科技夢，動手打造智慧新世界！
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-white">關於計畫</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li><a href="/about" className="transition hover:text-white">• 計畫緣起</a></li>
                <li><a href="/about" className="transition hover:text-white">• 計畫特色</a></li>
                <li><a href="/about" className="transition hover:text-white">• 四階段學習</a></li>
                <li><a href="/about" className="transition hover:text-white">• 執行團隊</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold text-white">認識 AIoT</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li><a href="/learn" className="transition hover:text-white">• AI與IoT</a></li>
                <li><a href="/learn" className="transition hover:text-white">• 運作流程</a></li>
                <li><a href="/learn" className="transition hover:text-white">• 感測器應用</a></li>
                <li><a href="/learn" className="transition hover:text-white">• 生活應用</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold text-white">AIoT動手玩</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li><a href="/hands-on" className="transition hover:text-white">• 智慧牙刷</a></li>
                <li><a href="/hands-on" className="transition hover:text-white">• 姿勢辨識</a></li>
                <li><a href="/hands-on" className="transition hover:text-white">• 智慧家庭</a></li>
                <li><a href="/hands-on" className="transition hover:text-white">• Micro:bit</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold text-white">活動成果</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li><a href="/programs" className="transition hover:text-white">• 營隊紀錄</a></li>
                <li><a href="/programs" className="transition hover:text-white">• 學生作品</a></li>
                <li><a href="/programs" className="transition hover:text-white">• 公開展覽</a></li>
                <li><a href="/programs" className="transition hover:text-white">• 成果交流</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold text-white">聯絡我們</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li><a href="/contact" className="transition hover:text-white">• 聯絡資訊</a></li>
                <li><a href="/contact" className="transition hover:text-white">• 國北教大</a></li>
                <li><a href="/contact" className="transition hover:text-white">• 合作洽詢</a></li>
                <li><a href="/contact" className="transition hover:text-white">• 隱私權說明</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-slate-900/80">
          <div className="mx-auto max-w-7xl px-4 py-5 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
            <p>指導單位：國家科學及技術委員會 ｜ 執行單位：國立臺北教育大學師資培育處</p>
            <p className="mt-2">© 2026 未來科技啟航：AIoT推廣科學營 All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
