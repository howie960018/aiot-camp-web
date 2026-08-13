import React from 'react';
import { MainNav } from '../components/MainNav';
import {
  ArrowRight,
  Cpu,
  HeartPulse,
  Home,
  Sparkles,
  Activity,
  Layers,
  Rocket,
  Users,
  Globe,
  Award,
  CircleCheckBig,
  Lightbulb,
  MapPinned,
  Newspaper,
  MessageSquareMore,
} from 'lucide-react';

const navItems = [
  { label: '首頁', href: '/' },
  { label: '關於計畫', href: '/about' },
  { label: '認識 AIoT', href: '/learn' },
  { label: 'AIoT 動手玩', href: '/hands-on' },
  { label: '活動成果', href: '/programs' },
  { label: '最新消息', href: '/news' },
  { label: '聯絡我們', href: '/contact' },
];

const flowSteps = [
  { label: '感測器蒐集資料', color: 'bg-sky-100 text-sky-700' },
  { label: 'AI 分析判斷', color: 'bg-violet-100 text-violet-700' },
  { label: '程式下達指令', color: 'bg-amber-100 text-amber-700' },
  { label: '裝置產生反應', color: 'bg-emerald-100 text-emerald-700' },
];

const projectHighlights = [
  {
    icon: Lightbulb,
    title: '生活情境',
    text: '從刷牙、居家照明與環境感測出發，幫助學生看見 AIoT 就在生活中。',
  },
  {
    icon: Cpu,
    title: '動手實作',
    text: '蒐集資料、訓練模型並操作裝置，將抽象科技轉成可見的實驗結果。',
  },
  {
    icon: Sparkles,
    title: 'AI 學習',
    text: '從影像辨識到動作判斷，讓孩子理解資料、模型與判斷之間的關係。',
  },
  {
    icon: Home,
    title: '創意應用',
    text: '結合 Micro:bit、感測器與程式設計，將生活問題轉化為創意作品。',
  },
];

const stageCards = [
  {
    step: '01',
    title: '體驗',
    desc: '操作感測器與智慧作品，先感受資料如何從生活中被蒐集與轉換。',
    accent: 'bg-sky-50 border-sky-200 text-sky-700',
  },
  {
    step: '02',
    title: '探究',
    desc: '針對問題蒐集資料、測試條件與判斷方式，學習反覆修正的方法。',
    accent: 'bg-emerald-50 border-emerald-200 text-emerald-700',
  },
  {
    step: '03',
    title: '科普',
    desc: '從情境案例理解 AI、IoT 與 AIoT 的原理，建立正確的科技觀念。',
    accent: 'bg-amber-50 border-amber-200 text-amber-700',
  },
  {
    step: '04',
    title: '創造',
    desc: '整合感測、AI 與程式設計，完成具體情境的智慧作品原型。',
    accent: 'bg-violet-50 border-violet-200 text-violet-700',
  },
];

const themes = [
  {
    icon: HeartPulse,
    name: '智慧牙刷',
    tag: '動作感測 × AI 辨識',
    text: '觀察不同刷牙動作的軌跡與數據，訓練 AI 了解何謂正確刷牙動作。',
  },
  {
    icon: Activity,
    name: 'AI 姿勢辨識',
    tag: '影像辨識 × 機器學習',
    text: '拍攝不同姿勢與動作，讓 AI 學習辨識畫面中的姿勢與狀態變化。',
  },
  {
    icon: Home,
    name: '智慧家庭',
    tag: 'Micro:bit × 控制反應',
    text: '透過燈光、蜂鳴器與感測器，讓居家系統根據環境與動作做出反應。',
  },
];

const regionList = ['新北市', '桃園市', '宜蘭縣', '新竹市', '南投縣', '金門縣'];

const activityCards = [
  {
    title: '智慧牙刷體驗營',
    type: 'AIoT 體驗營',
    text: '學生透過感測器與 AI 模型，從刷牙動作中理解數據與辨識。',
  },
  {
    title: 'AIoT 探索任務',
    type: 'AIoT 探索營',
    text: '結合程式設計與感測器，設計互動任務與智慧控制問題。',
  },
  {
    title: '智慧家庭作品展',
    type: '公開展覽',
    text: '從生活需求出發，學生將作品展示給社區與家長一起觀摩。',
  },
];

const newsCards = [
  { title: 'AIoT 科普營開課資訊', category: '活動紀錄', date: '2026.08.05' },
  { title: '學生作品成果交流會', category: '活動紀錄', date: '2026.07.22' },
  { title: 'AIoT 在校園中的應用', category: '媒體報導', date: '2026.06.18' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(119,171,255,0.18),_transparent_38%),linear-gradient(180deg,#f7fbff_0%,#f4f8ff_100%)] text-slate-700">
      <MainNav current="home" ctaHref="/about" ctaLabel="立即探索" />

      <main>
        <section className="relative overflow-hidden px-4 pb-12 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-bold tracking-[0.12em] text-sky-700">
                <Sparkles className="h-4 w-4 text-[#FFB703]" />
                國科會大眾科學教育計畫
              </div>

              <h2 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                未來科技啟航：<span className="text-[#1E6091]">AIoT</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                動手玩科技，打造會感受、會判斷、會反應的智慧生活！透過生活情境與實作任務，帶領孩子理解 AI 與 IoT 如何一起運作。
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/about"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#1E6091] px-6 py-3.5 text-base font-bold text-white shadow-[0_16px_30px_rgba(30,96,145,0.22)] transition hover:bg-[#174d76]"
                >
                  認識 AIoT
                </a>
                <a
                  href="/programs"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-[#1E6091] bg-white px-6 py-3.5 text-base font-bold text-[#1E6091] transition hover:bg-sky-50"
                >
                  查看活動成果
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2">
                  <CircleCheckBig className="h-4 w-4 text-emerald-500" />
                  生活化教學
                </div>
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2">
                  <CircleCheckBig className="h-4 w-4 text-emerald-500" />
                  動手實作
                </div>
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2">
                  <CircleCheckBig className="h-4 w-4 text-emerald-500" />
                  AIoT 創意作品
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-sky-200/60 blur-3xl" />
              <div className="absolute -right-5 bottom-12 h-40 w-40 rounded-full bg-violet-200/60 blur-3xl" />

              <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-5 shadow-[0_32px_60px_rgba(15,23,42,0.12)] sm:p-7">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">AIoT運作流程</p>
                    <h3 className="mt-2 text-2xl font-black text-slate-900">感測 → 判斷 → 反應</h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-orange-400 text-white">
                    <Cpu className="h-6 w-6" />
                  </div>
                </div>

                <div className="space-y-3">
                  {flowSteps.map((step, index) => (
                    <div key={step.label} className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-black ${step.color}`}>
                        {index + 1}
                      </div>
                      <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                        {step.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50 to-violet-50 p-4">
                  <p className="text-sm font-semibold text-slate-700">情境範例</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    當鏡頭辨識出「開燈」姿勢，程式便控制智慧小屋的燈光亮起，讓 AIoT 變成生活中的互動伙伴。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">AIoT 是什麼</p>
              <h3 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">AIoT，讓裝置變得更聰明</h3>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[28px] bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-200 sm:p-8">
                <p className="text-lg leading-relaxed text-slate-600">
                  AIoT 是人工智慧 AI 與物聯網 IoT 的結合。感測器負責蒐集動作、影像與環境資料，AI 負責分析與判斷，再由程式指令控制裝置做出反應。
                </p>
                <div className="mt-8 rounded-2xl bg-sky-50 p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-sky-700">流程</p>
                  <p className="mt-3 text-lg font-semibold text-slate-800">
                    感測器蒐集資料 → AI 分析判斷 → 程式下達指令 → 裝置做出反應
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  'AI 能從大量資料中找出規律，並辨識動作、影像與狀態。',
                  'IoT 讓裝置連接網路、蒐集資料並接收控制指令。',
                  'AIoT 將兩者結合後，裝置不只會感受環境，也能理解情境與做出反應。',
                ].map((item, idx) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-sm font-black text-violet-700">
                      {idx + 1}
                    </div>
                    <p className="flex items-center text-base text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">計畫介紹</p>
              <h3 className="mt-4 text-3xl font-black sm:text-4xl">把未來科技帶進孩子的生活</h3>
            </div>

            <div className="grid gap-6 lg:grid-cols-4">
              {projectHighlights.map((item) => (
                <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mb-2 text-xl font-bold text-white">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">四階段學習模式</p>
              <h3 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">從第一次體驗，到完成自己的 AIoT 作品</h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {stageCards.map((stage) => (
                <div key={stage.step} className={`rounded-[28px] border p-6 shadow-sm ${stage.accent}`}>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-4xl font-black opacity-80">{stage.step}</span>
                    <span className="rounded-full bg-white/80 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.12em]">
                      {stage.title}
                    </span>
                  </div>
                  <h4 className="mb-3 text-2xl font-black text-slate-800">{stage.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-600">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">三大實作主題</p>
              <h3 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">一起進入 AIoT 未來實驗室</h3>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {themes.map((theme) => (
                <div key={theme.name} className="flex h-full flex-col rounded-[28px] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)]">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-200">
                    <theme.icon className="h-6 w-6" />
                  </div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-600">{theme.tag}</p>
                  <h4 className="mb-3 text-2xl font-black text-slate-900">{theme.name}</h4>
                  <p className="mb-6 text-sm leading-relaxed text-slate-600">{theme.text}</p>
                  <button className="mt-auto inline-flex w-fit items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
                    了解更多
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f4f9ff] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">推動區域</p>
              <h3 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">讓科技學習跨越距離</h3>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[30px] border border-sky-200 bg-white p-6 shadow-[0_18px_40px_rgba(59,130,246,0.08)] sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <MapPinned className="h-6 w-6 text-sky-600" />
                  <h4 className="text-2xl font-black text-slate-900">推廣足跡</h4>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {regionList.map((region) => (
                    <div key={region} className="rounded-2xl bg-sky-50 px-4 py-3 text-center text-sm font-bold text-sky-700 ring-1 ring-sky-100">
                      {region}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] bg-slate-900 p-6 text-white shadow-[0_18px_40px_rgba(15,23,42,0.12)] sm:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-sky-300">活動足跡</p>
                <h4 className="mt-3 text-2xl font-black">從校園到社區，讓更多人看見科技的可能</h4>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  透過校園營隊、公開展覽與各地推廣活動，讓學生與家長在互動中理解 AIoT 的核心價值與實作潛力。
                </p>
                <button className="mt-6 inline-flex items-center rounded-full bg-white px-4 py-2.5 text-sm font-bold text-slate-900 transition hover:bg-slate-200">
                  查看活動成果
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="results" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">活動成果</p>
              <h3 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">看見孩子的探索與創造</h3>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {activityCards.map((item) => (
                <article key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_35px_rgba(15,23,42,0.04)]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <Newspaper className="h-5 w-5" />
                  </div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-sky-600">{item.type}</p>
                  <h4 className="mb-3 text-2xl font-black text-slate-900">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900 px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">成果數字</p>
                <h3 className="mt-3 text-3xl font-black sm:text-4xl">我們的 AIoT 推廣足跡</h3>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-slate-300">
                從生活中的問題切入，讓學生在實作中建立科技素養與成就感。
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                { icon: Globe, num: '6', label: '推動縣市' },
                { icon: Layers, num: '8', label: '活動場次' },
                { icon: Users, num: '200+', label: '學生人次' },
                { icon: Award, num: '100%', label: '實作導向課程' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-white">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div className="text-4xl font-black text-white">{stat.num}</div>
                  <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-600">最新消息</p>
                <h3 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">掌握活動與成果更新</h3>
              </div>
              <button className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                查看全部消息
              </button>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {newsCards.map((news) => (
                <article key={news.title} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_16px_35px_rgba(15,23,42,0.04)]">
                  <div className="mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em] text-sky-600">
                    <span>{news.category}</span>
                    <span className="text-slate-400">{news.date}</span>
                  </div>
                  <h4 className="mb-3 text-xl font-black text-slate-900">{news.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-600">
                    透過互動式體驗與作品展示，讓學生與家長一起看見 AIoT 的實際應用價值。
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-sky-700">
                    <MessageSquareMore className="h-4 w-4" />
                    查看詳情
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[32px] bg-gradient-to-r from-sky-600 via-blue-600 to-violet-600 p-8 text-center text-white shadow-[0_28px_50px_rgba(37,99,235,0.18)] sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-100">一起探索</p>
            <h3 className="mt-4 text-3xl font-black sm:text-4xl">準備好一起探索 AIoT 了嗎？</h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-sky-50">
              從感受環境、分析資料到控制裝置，現在就跟著我們一步一步動手實驗，發現人工智慧與物聯網如何改變未來生活。
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="#about" className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-base font-bold text-sky-700 transition hover:bg-sky-50">
                開始認識 AIoT
              </a>
              <a href="#results" className="inline-flex items-center justify-center rounded-2xl border border-white/50 bg-white/10 px-6 py-3.5 text-base font-bold text-white transition hover:bg-white/15">
                前往活動成果
              </a>
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
    </div>
  );
}
