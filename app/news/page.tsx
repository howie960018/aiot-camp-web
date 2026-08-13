import { ArrowRight, CalendarDays, ChevronRight, Newspaper, Rocket, Tag } from 'lucide-react';
import { MainNav } from '../../components/MainNav';

const categories = ['全部', '活動紀錄', '媒體報導'];

const newsItems = [
  {
    title: 'AIoT 科普營開課資訊',
    category: '活動紀錄',
    date: '2026.08.05',
    summary: '本次營隊帶領學生從生活情境出發，透過感測器操作與創意任務完成智慧作品。',
  },
  {
    title: '學生作品成果交流會',
    category: '活動紀錄',
    date: '2026.07.22',
    summary: '孩子們展示智慧牙刷、AI 姿勢辨識與智慧家庭作品，分享實作與修正歷程。',
  },
  {
    title: 'AIoT 在校園中的應用',
    category: '媒體報導',
    date: '2026.06.18',
    summary: '透過生活案例說明 AI、IoT 與 AIoT 如何結合，讓更多人理解科技的實用價值。',
  },
  {
    title: '從感測到判斷：AIoT 學習課程分享',
    category: '媒體報導',
    date: '2026.04.15',
    summary: '以互動式教學與作品實作例子，介紹 AIoT 在新興科技教育中的重要角色。',
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7fbff_0%,#f2f7ff_100%)] text-slate-700">
      <MainNav current="news" ctaHref="/contact" ctaLabel="聯絡我們" />

      <main>
        <section className="px-4 pb-16 pt-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">最新消息</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">掌握活動與成果更新</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
              透過活動紀錄、媒體報導與課程更新，讓更多人看見 AIoT 在校園與生活中的學習成果與推廣動能。
            </p>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    category === '全部'
                      ? 'bg-[#1E6091] text-white shadow-lg shadow-sky-200'
                      : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {newsItems.map((news) => (
                <article key={news.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_36px_rgba(15,23,42,0.05)]">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.12em] text-sky-600">
                    <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1.5 text-sky-700">
                      <Tag className="h-3.5 w-3.5" />
                      {news.category}
                    </span>
                    <span className="inline-flex items-center gap-2 text-slate-400">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {news.date}
                    </span>
                  </div>

                  <h3 className="mb-3 text-2xl font-black text-slate-900">{news.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{news.summary}</p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
                      <Newspaper className="h-4 w-4" />
                      閱讀詳情
                    </span>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </div>
                </article>
              ))}
            </div>
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
