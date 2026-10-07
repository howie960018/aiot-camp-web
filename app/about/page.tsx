import { ArrowRight, BadgeCheck, BookOpen, Building2, Globe2, Lightbulb, MapPinned, Rocket, Sparkles, Users } from 'lucide-react';
import { MainNav } from '../../components/MainNav';
import { pageMetadata } from '../../lib/seo';

export const metadata = pageMetadata({
  title: '關於計畫',
  description:
    '國北教大執行之國科會大眾科學教育計畫，說明 AIoT 推廣科學營的計畫緣起與目標，以體驗、探究、科普、創造四階段學習模式，帶國小學生走進 AI 與物聯網，並深入新北、桃園、宜蘭、新竹、南投、金門等縣市推廣。',
  path: '/about',
});

const values = [
  {
    icon: Lightbulb,
    title: '計畫緣起',
    text: '面對快速變化的數位時代，讓孩子從生活經驗出發，建立對 AI 與物聯網的基本理解與好奇心。',
  },
  {
    icon: BookOpen,
    title: '計畫目標',
    text: '透過活動與實作，提升學生的科技探索能力、問題解決能力與創意思考，培養對未來科技的興趣。',
  },
  {
    icon: BadgeCheck,
    title: '計畫特色',
    text: '以生活情境與實作任務為核心，讓科普不只是聽講，而是親手操作、觀察、修正與完成作品。',
  },
  {
    icon: Rocket,
    title: '四階段學習模式',
    text: '體驗、探究、科普、創造的學習路徑，讓每位孩子都能從基礎逐步邁向創作與分享。',
  },
];

const stages = [
  {
    step: '01',
    title: '體驗',
    text: '操作感測器與器材，先感受 AIoT 是如何把現象轉為資料。',
  },
  {
    step: '02',
    title: '探究',
    text: '從觀察與資料中發現問題，學會提出假設並反覆測試。',
  },
  {
    step: '03',
    title: '科普',
    text: '理解 AI、IoT 與 AIoT 的關聯，建立正確的科技概念與學習動機。',
  },
  {
    step: '04',
    title: '創造',
    text: '結合實作工具與創意思考，完成屬於自己的智慧作品與展示內容。',
  },
];

const regions = ['新北市', '桃園市', '宜蘭縣', '新竹市', '南投縣', '金門縣'];

const teamMembers = [
  { name: '吳佳娣助理教授', role: '計畫主持人' },
  { name: 'AIoT 執行團隊', role: '教學與課程設計' },
  { name: '校園夥伴教師', role: '活動協力與推廣' },
  { name: '學生與家長', role: '學習參與與回饋' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7fbff_0%,#f2f7ff_100%)] text-slate-700">
      <MainNav current="about" ctaHref="/programs" ctaLabel="查看成果" />

      <main>
        <section className="px-4 pb-16 pt-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">關於計畫</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">讓孩子從生活中，理解未來科技</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
              「未來科技啟航：AIoT 推廣科學營」以生活情境、動手實作與創意探索為核心，協助國小學生理解 AI 與物聯網如何進入日常生活，並透過實作建立興趣與信心。
            </p>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {values.map((item) => (
              <article key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_36px_rgba(15,23,42,0.05)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-black text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">四階段學習模式</p>
              <h3 className="mt-4 text-3xl font-black sm:text-4xl">體驗—探究—科普—創造</h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {stages.map((stage) => (
                <div key={stage.step} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-4xl font-black text-sky-200">{stage.step}</span>
                    <Sparkles className="h-5 w-5 text-amber-300" />
                  </div>
                  <h4 className="mb-3 text-2xl font-black text-white">{stage.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-300">{stage.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">推動區域</p>
              <h3 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">擴展科技教育的影響力</h3>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[30px] border border-sky-200 bg-white p-6 shadow-[0_18px_40px_rgba(59,130,246,0.08)] sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <MapPinned className="h-6 w-6 text-sky-600" />
                  <h4 className="text-2xl font-black text-slate-900">推動區域</h4>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {regions.map((region) => (
                    <div key={region} className="rounded-2xl bg-sky-50 px-4 py-3 text-center text-sm font-bold text-sky-700 ring-1 ring-sky-100">
                      {region}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] bg-gradient-to-br from-sky-600 to-violet-600 p-6 text-white shadow-[0_18px_40px_rgba(37,99,235,0.16)] sm:p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Globe2 className="h-5 w-5" />
                </div>
                <h4 className="text-2xl font-black">從偏鄉到城鎮，讓更多孩子接觸新科技</h4>
                <p className="mt-4 text-sm leading-relaxed text-sky-50">
                  本計畫將 AIoT 科普課程帶進不同地區校園，提供孩子們更多接觸新興科技與實作設備的機會，降低學習門檻並激發探索意願。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f9ff] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">執行團隊</p>
              <h3 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">共同支持孩子的科技學習旅程</h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {teamMembers.map((person) => (
                <div key={person.name} className="rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-[0_16px_35px_rgba(15,23,42,0.04)]">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-white">
                    <Users className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-black text-slate-900">{person.name}</h4>
                  <p className="mt-2 text-sm font-medium text-slate-500">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 pt-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[32px] bg-gradient-to-r from-sky-600 via-blue-600 to-violet-600 p-8 text-center text-white shadow-[0_28px_50px_rgba(37,99,235,0.18)] sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-100">我們相信</p>
            <h3 className="mt-4 text-3xl font-black sm:text-4xl">科技不是只給少數人看見的奧秘，而是每個孩子都能探索的學習機會。</h3>
            <a href="/learn" className="mt-8 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-base font-bold text-sky-700 transition hover:bg-sky-50">
              進一步認識 AIoT
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
