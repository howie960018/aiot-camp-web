import { ArrowRight, BrainCircuit, Cpu, Database, Gauge, Lightbulb, Microscope, PlayCircle, ShieldCheck, Sparkles, Waves } from 'lucide-react';
import { MainNav } from '../../components/MainNav';
import { pageMetadata } from '../../lib/seo';

export const metadata = pageMetadata({
  title: '認識 AIoT',
  description:
    '認識 AI 與物聯網（IoT）如何結合成 AIoT：從感測、判斷到反應的運作流程，到智慧家庭、健康照護、交通等生活應用，搭配 AI 科普影片，讓國小學生輕鬆理解未來科技。國北教大 × 國科會科學營。',
  path: '/learn',
});

const conceptCards = [
  {
    icon: BrainCircuit,
    title: 'AI 是什麼？',
    text: 'AI 是 Artificial Intelligence 的縮寫，讓電腦從大量資料中學習規律，進行辨識、分類與預測。',
  },
  {
    icon: Cpu,
    title: 'IoT 是什麼？',
    text: 'IoT 是 Internet of Things，讓日常裝置能夠感知環境、連接網路並接收控制指令。',
  },
  {
    icon: Sparkles,
    title: 'AI＋IoT＝AIoT',
    text: 'AIoT 將感測、連線、分析與控制整合，讓裝置不只會感應，也能做出智慧回應。',
  },
  {
    icon: Gauge,
    title: 'AIoT 如何運作？',
    text: '感測器先蒐集資料，AI 進行判斷，再由程式控制裝置產生反應。',
  },
];

const learnSteps = [
  {
    icon: Database,
    title: '蒐集資料',
    text: '先拍攝或記錄大量影像、動作與環境資料，作為 AI 學習的素材。',
  },
  {
    icon: Microscope,
    title: '分析特徵',
    text: 'AI 會從資料中找出關鍵差異，例如姿勢、光線或動作軌跡。',
  },
  {
    icon: BrainCircuit,
    title: '訓練模型',
    text: '把資料分類後，讓模型逐步建立辨識規則，並進行測試與修正。',
  },
  {
    icon: Cpu,
    title: '做出反應',
    text: '最後將判斷結果交給程式，控制燈光、蜂鳴器與其他裝置做出動作。',
  },
];

const sensors = [
  '加速度感測器：偵測動作方向與速度',
  '攝影鏡頭：記錄影像並做姿勢辨識',
  '光線感測器：判斷亮度與照明需求',
  '溫溼度感測器：觀察環境變化',
  '雨滴感測器：偵測濕潤狀況',
  '氣體感測器：檢測空氣狀態與異常',
];

const apps = [
  '智慧家庭：自動控制燈光、警報與環境設備',
  '智慧健康：幫助紀錄與辨識運動或刷牙動作',
  '智慧農業：觀察溫度、土壤與濕度狀態',
  '智慧校園：管理教室環境與設備安全',
  '智慧城市：監測交通與環境數據',
];

const scienceVideos = [
  { title: 'AIoT 是什麼？一起認識人工智慧與物聯網', videoId: 'asbccpdJlrA' },
  { title: 'AI 如何學習？從資料到智慧判斷', videoId: 'SgDc0r0994E' },
  { title: 'AI 是什麼？2 分鐘看懂人工智慧！AI 偵探帶你大解密', videoId: 'Lb0AgFcqCy0' },
  { title: 'AI 在生活中的多元應用', videoId: 'ziGk4AkKMBg' },
];

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7fbff_0%,#f2f7ff_100%)] text-slate-700">
      <MainNav current="learn" ctaHref="/hands-on" ctaLabel="動手實作" />

      <main>
        <section className="px-4 pb-16 pt-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">認識 AIoT</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">讓裝置看懂世界，並做出回應</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
              AIoT 將人工智慧與物聯網結合，讓裝置不只是連接網路，而是能感知資料、分析情境並進行適當的回應。從日常生活中看見科技，從實作中理解它的運作方式。
            </p>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {conceptCards.map((item) => (
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
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">AIoT 運作流程</p>
              <h3 className="mt-4 text-3xl font-black sm:text-4xl">感測器蒐集資料 → AI 分析判斷 → 程式下達指令 → 裝置做出反應</h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {learnSteps.map((step) => (
                <div key={step.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mb-3 text-xl font-black text-white">{step.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-300">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">AI 如何學會辨識？</p>
              <h3 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">先學習，再判斷，再修正</h3>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)] sm:p-8">
                <p className="text-lg leading-relaxed text-slate-600">
                  AI 需要大量例子來學習。若要讓電腦辨識「開燈」與「關燈」的姿勢，就必須先蒐集許多不同圖片與動作資料，讓模型找到特徵，並在測試時判斷是否正確。
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    '先決定辨識目標：例如不同姿勢、動作或物品。',
                    '收集多樣化資料：不同背景、角度與個體差異都會影響結果。',
                    '訓練與修正：若辨識錯誤，就檢查資料是否足夠且是否有偏差。',
                  ].map((item, index) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-black text-sky-700">
                        {index + 1}
                      </div>
                      <p className="flex items-center text-sm leading-relaxed text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] bg-gradient-to-br from-sky-50 to-violet-50 p-6 ring-1 ring-sky-100 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <Lightbulb className="h-6 w-6 text-amber-500" />
                  <h4 className="text-2xl font-black text-slate-900">小提醒</h4>
                </div>
                <p className="text-base leading-relaxed text-slate-600">
                  AI 並不是完全理解世界，它只是根據資料學習到的模式做判斷。資料越多、越多元，模型通常越穩定；但如果資料偏差或不足，判斷結果也可能偏差。
                </p>
                <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-violet-700">想一想</p>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">
                    如果 AI 只看過白天的資料，到了晚上或不同光線條件下，辨識結果可能會不準，這時候要如何改善？
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f9ff] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">感測器介紹</p>
              <h3 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">感測器是智慧裝置的感官</h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {sensors.map((sensor) => (
                <div key={sensor} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_14px_32px_rgba(15,23,42,0.04)]">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                    <Waves className="h-5 w-5" />
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{sensor}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">AIoT 生活應用</p>
              <h3 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">從生活裡看到科技的價值</h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {apps.map((app) => (
                <div key={app} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_14px_32px_rgba(15,23,42,0.04)]">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{app}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ai-science-videos" className="bg-rose-50/70 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">AI 科普影音</p>
              <h3 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">用影片認識人工智慧</h3>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
                透過簡短有趣的科普影片，帶你認識人工智慧如何學習、創作，以及 AI 在日常生活中的多元應用。
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {scienceVideos.map((video) => (
                <article key={video.videoId} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_18px_36px_rgba(15,23,42,0.06)] sm:p-5">
                  <div className="aspect-video overflow-hidden rounded-2xl bg-slate-900">
                    <iframe
                      className="h-full w-full"
                      src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="mt-5 flex items-start gap-3">
                    <PlayCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" />
                    <h4 className="text-lg font-black leading-relaxed text-slate-900">{video.title}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[32px] bg-gradient-to-r from-sky-600 via-blue-600 to-violet-600 p-8 text-center text-white shadow-[0_28px_50px_rgba(37,99,235,0.18)] sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-100">安全與隱私</p>
            <h3 className="mt-4 text-3xl font-black sm:text-4xl">科技很聰明，使用時也要很負責任</h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-sky-50">
              AIoT 能提升便利性，但也要注意隱私保護、判斷錯誤與網路安全。負責任地使用科技，是每個 AIoT 學習者都需要理解的重要內容。
            </p>
            <a href="/hands-on" className="mt-8 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-base font-bold text-sky-700 transition hover:bg-sky-50">
              進入動手實作
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
