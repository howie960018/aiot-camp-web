import { ArrowRight, Award, BookOpen, CalendarRange, Camera, Globe2, Newspaper, Rocket, Sparkles, Users } from 'lucide-react';
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
