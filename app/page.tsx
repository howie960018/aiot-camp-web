import React from 'react';
import { Cpu, HeartPulse, Home, Sparkles, Activity, Layers, Rocket, Users, Globe, Award } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="w-7 h-7 text-[#1E6091]" />
            <span className="font-bold text-lg sm:text-xl text-[#1E6091]">AIoT 推廣科學營</span>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
            <a href="#hero" className="hover:text-[#1E6091] transition">首頁</a>
            <a href="#steps" className="hover:text-[#1E6091] transition">學習模式</a>
            <a href="#themes" className="hover:text-[#1E6091] transition">實作主題</a>
            <a href="#stats" className="hover:text-[#1E6091] transition">推廣成果</a>
          </nav>
          <button className="bg-[#1E6091] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#1A5276] transition shadow-md">
            立即探索
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* SECTION 1: Hero 主視覺 */}
        <section id="hero" className="relative bg-gradient-to-b from-blue-50/50 to-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-[#1E6091] px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-[#FFB703]" /> 國科會大眾科學教育計畫
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              未來科技啟航：<span className="text-[#1E6091]">AIoT 推廣科學營</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              動手玩科技，打造會感受、會判斷、會反應的智慧生活！讓孩子從刷牙與日常互動中親自訓練 AI 模型與操作感測器。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a href="#themes" className="bg-[#1E6091] text-white px-8 py-3.5 rounded-xl font-bold text-base hover:bg-[#1A5276] transition shadow-lg text-center">
                認識 AIoT 實作
              </a>
              <a href="#stats" className="bg-white text-[#1E6091] border-2 border-[#1E6091] px-8 py-3.5 rounded-xl font-bold text-base hover:bg-blue-50 transition text-center">
                查看推廣成果
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: 四階段學習模式 */}
        <section id="steps" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">「體驗 — 探究 — 科普 — 創造」四階段模式</h2>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">循序漸進，讓學生從親手操作觀念延伸至 Maker 作品原型創設</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: '體驗', desc: '操作感測器與智慧牙刷，觀察三軸數據變化，建立 AIoT 初步概念。', color: 'bg-blue-50 border-blue-200' },
                { step: '02', title: '探究', desc: '進行任務導向實作，自行蒐集資料訓練模型，反覆測試與修正錯誤。', color: 'bg-emerald-50 border-emerald-200' },
                { step: '03', title: '科普', desc: '親子共學互動體驗，理解影像辨識與姿態判讀原理，融入日常情境。', color: 'bg-amber-50 border-amber-200' },
                { step: '04', title: '創造', desc: '整合 Micro:bit、AI Lens 與 IoT 裝置，打造智慧小屋等創客作品原型。', color: 'bg-purple-50 border-purple-200' },
              ].map((item, idx) => (
                <div key={idx} className={`p-6 rounded-2xl border-2 ${item.color} transition hover:shadow-md flex flex-col justify-between`}>
                  <div>
                    <span className="text-3xl font-black text-gray-400 opacity-60">{item.step}</span>
                    <h3 className="text-xl font-bold text-gray-800 mt-2 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: 三大實作主題 */}
        <section id="themes" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">三大實作主題</h2>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">結合軟硬體教具，輕鬆看懂 AI 與物聯網如何整合</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 主題 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-blue-100 text-[#1E6091] rounded-xl flex items-center justify-center mb-4">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">智慧牙刷</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    結合六軸感應器與數據分析技術（專利授權），記錄刷牙動作與角度，透過 AI 辨識即時矯正刷牙姿勢。
                  </p>
                </div>
                <span className="inline-block text-xs font-semibold bg-blue-50 text-[#1E6091] px-3 py-1 rounded-md self-start">動作感測 × AI 辨識</span>
              </div>

              {/* 主題 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI 姿勢辨識</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    使用 AI 鏡頭與 Teachable Machine，親手拍攝影像範例、訓練姿勢辨識模型，體驗機器學習流程。
                  </p>
                </div>
                <span className="inline-block text-xs font-semibold bg-emerald-50 text-emerald-600 px-3 py-1 rounded-md self-start">影像辨識 × 機器學習</span>
              </div>

              {/* 主題 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <Home className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">智慧家庭</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    將 AI 判讀結果串接 Micro:bit、蜂鳴器與 LED 燈，實作姿勢控燈、雨滴感應及居家入侵警報系統。
                  </p>
                </div>
                <span className="inline-block text-xs font-semibold bg-purple-50 text-purple-600 px-3 py-1 rounded-md self-start">Micro:bit × 控制反應</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: 動態成果數字區塊 */}
        <section id="stats" className="py-16 bg-[#1E6091] text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold">計畫推廣預計效益與足跡</h2>
              <p className="text-blue-200 mt-2 text-sm">深耕偏鄉與離島科技普及教育</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { icon: Globe, num: '6 個', label: '推動縣市 (新北/桃園/宜蘭/新竹/南投/金門)' },
                { icon: Layers, num: '8 場', label: '科普營隊與研習活動' },
                { icon: Users, num: '200+ 人', label: '營隊培訓學生人次' },
                { icon: Award, num: '10,000+ 人次', label: '推廣網站預估瀏覽人次' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center">
                  <stat.icon className="w-8 h-8 text-[#FFB703] mb-3" />
                  <span className="text-3xl sm:text-4xl font-extrabold text-white mb-1">{stat.num}</span>
                  <span className="text-xs sm:text-sm text-blue-100">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 5. Footer (單位標示合規) */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-xs sm:text-sm border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div>
            <p className="text-gray-200 font-semibold mb-1">未來科技啟航：AIoT 推廣科學營</p>
            <p>主辦單位：國家科學及技術委員會｜執行單位：國立臺北教育大學師資培育處</p>
          </div>
          <p className="text-gray-500">© 2026 NTUE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}