import { ArrowRight, Blocks, Bot, Cable, Cpu, Lightbulb, Mic, Rocket, Sparkles, Wrench } from 'lucide-react';
import { MainNav } from '../../components/MainNav';

const steps = [
  {
    icon: Lightbulb,
    title: '發現生活問題',
    text: '從刷牙、照明、環境監測或安全提醒等情境出發，找出能用科技改善的地方。',
  },
  {
    icon: Cable,
    title: '選擇感測方式',
    text: '依照需求選擇攝影鏡頭、動作感測器或環境感測器，蒐集最合適的資料。',
  },
  {
    icon: Cpu,
    title: '訓練 AI 模型',
    text: '將資料整理後建立模型，測試辨識結果並反覆修正提升準確度。',
  },
  {
    icon: Bot,
    title: '控制裝置反應',
    text: '透過程式決定裝置需要如何做出回應，例如開燈、發聲或顯示警示。',
  },
];

const projects = [
  {
    icon: Lightbulb,
    name: '智慧牙刷',
    tag: '動作感測 × AI 辨識',
    text: '利用三軸感測器記錄刷牙動作，幫助學生理解運動資料如何成為 AI 判斷依據。',
  },
  {
    icon: Mic,
    name: 'AI 姿勢辨識',
    tag: '影像辨識 × 模型訓練',
    text: '以不同姿勢作為訓練資料，讓 AI 學會辨識動作與狀態，並與裝置連動。',
  },
  {
    icon: Blocks,
    name: '智慧家庭',
    tag: 'Micro:bit × 生活控制',
    text: '整合燈光、蜂鳴器與感測器，讓居家環境根據情境做出智慧回應。',
  },
];

const toolCards = [
  'Micro:bit 開發板',
  'LED 點陣與按鈕',
  '加速度計與方向感測',
  '攝影鏡頭與 AI 工具',
  '蜂鳴器與燈光模組',
  '圖形化程式設計工具',
];

export default function HandsOnPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7fbff_0%,#f2f7ff_100%)] text-slate-700">
      <MainNav current="hands-on" ctaHref="/programs" ctaLabel="查看成果" />

      <main>
        <section className="px-4 pb-16 pt-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">AIoT 動手玩</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">從想法出發，親手做出智慧作品</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
              AIoT 不只可以理解與想像，更可以親手做出來。從蒐集資料、訓練模型、到控制裝置，我們每一步都在把想法變成一個會動的系統。
            </p>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">AIoT 實作流程</p>
              <h3 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">一個作品怎麼誕生？</h3>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              {steps.map((step) => (
                <div key={step.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_36px_rgba(15,23,42,0.05)]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mb-3 text-xl font-black text-slate-900">{step.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">三大實作主題</p>
              <h3 className="mt-4 text-3xl font-black sm:text-4xl">用科技解決生活中的問題</h3>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.name} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white">
                    <project.icon className="h-5 w-5" />
                  </div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-300">{project.tag}</p>
                  <h4 className="mb-3 text-2xl font-black text-white">{project.name}</h4>
                  <p className="text-sm leading-relaxed text-slate-300">{project.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">實作工具</p>
              <h3 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">Micro:bit 是智慧作品的控制中心</h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {toolCards.map((tool) => (
                <div key={tool} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{tool}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[32px] bg-gradient-to-r from-sky-600 via-blue-600 to-violet-600 p-8 text-center text-white shadow-[0_28px_50px_rgba(37,99,235,0.18)] sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-100">動手挑戰</p>
            <h3 className="mt-4 text-3xl font-black sm:text-4xl">如果你可以設計一個智慧作品，你想讓它感受到什麼？</h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-sky-50">
              透過資料、AI 和程式，我們可以讓裝置看見世界、理解情境、並根據需求做出回應。讓生活不只是被使用，而是被理解與智慧化。
            </p>
            <a href="/programs" className="mt-8 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-base font-bold text-sky-700 transition hover:bg-sky-50">
              觀看活動成果
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
