'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, Building2, Clock3, Globe, Mail, MapPin, Navigation, Phone, Rocket, Send, UserRound, Users } from 'lucide-react';
import { MainNav } from '../../components/MainNav';

const contacts = [
  { icon: UserRound, label: '計畫名稱', value: '未來科技啟航：AIoT 推廣科學營' },
  { icon: Building2, label: '執行單位', value: '國立臺北教育大學師資培育處' },
  { icon: UserRound, label: '計畫主持人', value: '吳佳娣助理教授' },
  { icon: Clock3, label: '服務時間', value: '週一至週五 08:30–17:30（國定假日及例假日除外）' },
];

const schoolFacts = [
  { label: '學校名稱', value: '國立臺北教育大學' },
  { label: '學校地址', value: '10671 臺北市大安區和平東路二段134號' },
  { label: '學校電話', value: '(02) 2732-1104' },
  { label: '學校網站', value: 'https://www.ntue.edu.tw/' },
];

const cooperationAreas = [
  {
    title: '校園營隊合作',
    description: '依學生年級、參與人數及場地設備，規劃 AIoT 體驗、探索或科普活動。',
  },
  {
    title: '科普推廣合作',
    description: '配合科學日、校慶、親子活動或教育推廣場合，辦理 AIoT 展示與互動體驗。',
  },
  {
    title: '成果展示合作',
    description: '分享智慧刷牙助理、入侵者偵測系統及 Micro:bit 互動作品。',
  },
  {
    title: '教學交流合作',
    description: '與教師及教育推廣團隊交流 AIoT 教材、課程設計與實施經驗。',
  },
];

const inquiryFields = [
  { name: 'school', label: '單位或學校名稱', type: 'text', placeholder: '例如：新北市某國中' },
  { name: 'contactName', label: '聯絡人姓名及職稱', type: 'text', placeholder: '例如：王小明 / 教務主任' },
  { name: 'contactMethod', label: '聯絡方式', type: 'text', placeholder: '手機或電子郵件' },
  { name: 'activityType', label: '希望合作的活動類型', type: 'text', placeholder: '例如：營隊、講座、工作坊' },
  { name: 'dateLocation', label: '預計日期與地點', type: 'text', placeholder: '例如：2026/12/15，臺北市' },
  { name: 'participants', label: '參與對象及預估人數', type: 'text', placeholder: '例如：國中生 40 人' },
  { name: 'facilityNeeds', label: '場地及設備情形', type: 'text', placeholder: '例如：投影機、實驗器材' },
  { name: 'remarks', label: '其他合作需求', type: 'textarea', placeholder: '請描述您的需求與期望' },
] as const;

const initialFormState = inquiryFields.reduce((acc, field) => {
  acc[field.name] = '';
  return acc;
}, {} as Record<string, string>);

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('合作洽詢表單送出：', formData);
    setFormData(initialFormState);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7fbff_0%,#f2f7ff_100%)] text-slate-700">
      <MainNav current="contact" ctaHref="/" ctaLabel="回首頁" />

      <main>
        <section className="px-4 pb-16 pt-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">05｜聯絡我們 Contact</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">聯絡我們</h2>
            <p className="mx-auto mt-5 max-w-4xl text-lg leading-relaxed text-slate-600">
              想進一步了解「未來科技啟航：AIoT 推廣科學營」，或對營隊活動、校園合作、成果展覽及 AIoT 科普推廣有任何問題，歡迎與我們聯繫。
            </p>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10">
            <div className="mb-8 flex items-end justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">5-1 ｜ 聯絡資訊</p>
                <h3 className="mt-3 text-3xl font-black text-slate-900">與計畫團隊聯繫</h3>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="max-w-2xl text-base leading-relaxed text-slate-600">
                  如有活動參與、營隊辦理、網站內容或其他計畫相關問題，歡迎透過以下方式聯絡計畫團隊，我們將於收到訊息後儘快回覆。
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {contacts.map((contact) => (
                    <div key={contact.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                        <contact.icon className="h-5 w-5" />
                      </div>
                      <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-slate-400">{contact.label}</p>
                      <p className="mt-2 text-base font-semibold text-slate-700">{contact.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-sky-100 bg-gradient-to-br from-sky-50 to-blue-50 p-6">
                <h4 className="text-xl font-black text-slate-900">計畫資訊</h4>
                <div className="mt-5 space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <Building2 className="mt-0.5 h-4 w-4 text-sky-600" />
                    <span>執行單位：國立臺北教育大學師資培育處</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <UserRound className="mt-0.5 h-4 w-4 text-sky-600" />
                    <span>主持人：吳佳娣助理教授</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock3 className="mt-0.5 h-4 w-4 text-sky-600" />
                    <span>服務時間：週一至週五 08:30–17:30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10">
            <div className="mb-8 flex items-end justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">5-2 ｜ 國立臺北教育大學</p>
                <h3 className="mt-3 text-3xl font-black text-slate-900">國立臺北教育大學</h3>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-base leading-relaxed text-slate-600">
                  國立臺北教育大學長期投入師資培育、教育研究與科技教育推廣，結合教學專業與創新科技，發展適合學生、教師及一般民眾參與的科普課程與實作活動。
                </p>

                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  本計畫由國立臺北教育大學執行，透過人工智慧、物聯網、程式設計與感測器實作，將新興科技轉化為容易理解、可以親手操作的學習內容，並將相關資源帶進不同地區的校園。
                </p>

                <div className="mt-6 space-y-3 rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                  {schoolFacts.map((item) => (
                    <div key={item.label} className="flex flex-col gap-1 sm:flex-row sm:items-center">
                      <span className="w-24 text-sm font-bold text-slate-500">{item.label}：</span>
                      {item.label === '學校網站' ? (
                        <a href={item.value} target="_blank" rel="noreferrer" className="text-sm font-medium text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-800">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm text-slate-700">{item.value}</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[24px] border border-slate-200 bg-white p-5">
                  <h4 className="text-lg font-black text-slate-900">交通資訊</h4>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    國立臺北教育大學鄰近臺北捷運文湖線科技大樓站，可由和平東路二段校門進入。前往校內參加活動前，請先確認活動通知所載的報到地點及時間。
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_36px_rgba(15,23,42,0.05)]">
                  <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
                    <h4 className="text-lg font-black text-slate-900">地圖區塊</h4>
                  </div>
                  <iframe
                    title="國立臺北教育大學地圖"
                    src="https://www.google.com/maps?q=%E5%9C%8B%E7%AB%8B%E8%87%BA%E5%8C%97%E6%95%99%E8%82%B2%E5%A4%A7%E5%AD%B8&hl=zh-TW&output=embed"
                    className="h-[280px] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <a href="https://www.ntue.edu.tw/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1E6091] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#174d76]">
                    <Globe className="h-4 w-4" />
                    前往學校網站
                  </a>
                  <a href="https://www.google.com/maps/search/?api=1&query=%E5%9C%8B%E7%AB%8B%E8%87%BA%E5%8C%97%E6%95%99%E8%82%B2%E5%A4%A7%E5%AD%B8" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-sky-200 hover:text-sky-700">
                    <MapPin className="h-4 w-4" />
                    查看地圖
                  </a>
                  <div className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700">
                    <Navigation className="h-4 w-4" />
                    交通資訊
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10">
            <div className="mb-8 flex items-end justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">5-3 ｜ 合作洽詢</p>
                <h3 className="mt-3 text-3xl font-black text-slate-900">一起把 AIoT 科普教育帶進校園</h3>
              </div>
            </div>

            <div className="space-y-6">
              <p className="max-w-4xl text-lg leading-relaxed text-slate-600">
                本計畫由國家科學及技術委員會主辦、國立臺北教育大學執行，期待與學校、教育單位及科普推廣夥伴交流合作，讓更多學生有機會接觸人工智慧、物聯網、Micro:bit 與感測器實作。
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                {cooperationAreas.map((item) => (
                  <div key={item.title} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                      <Users className="h-5 w-5" />
                    </div>
                    <h4 className="text-xl font-black text-slate-900">{item.title}</h4>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[28px] border border-sky-100 bg-gradient-to-r from-sky-50 to-violet-50 p-6">
                <h4 className="text-xl font-black text-slate-900">洽詢時建議提供</h4>
                <ul className="mt-4 grid gap-3 text-base text-slate-600 sm:grid-cols-2">
                  <li>• 單位或學校名稱</li>
                  <li>• 聯絡人姓名及職稱</li>
                  <li>• 聯絡方式</li>
                  <li>• 希望合作的活動類型</li>
                  <li>• 預計日期與地點</li>
                  <li>• 參與對象及預估人數</li>
                  <li>• 場地及設備情形</li>
                  <li>• 其他合作需求</li>
                </ul>
              </div>

              <p className="text-base leading-relaxed text-slate-600">
                歡迎與國立臺北教育大學計畫執行團隊聯繫，一起為孩子創造更多探索 AIoT 與未來科技的學習機會。
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <form onSubmit={handleSubmit} className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] sm:p-8 lg:p-10">
              <div className="mb-8 flex items-center gap-3">
                <Send className="h-7 w-7 text-violet-600" />
                <h3 className="text-3xl font-black text-slate-900">合作洽詢</h3>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                {inquiryFields.map((field) => {
                  const value = formData[field.name] ?? '';

                  return (
                    <div key={field.name} className={`rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 ${field.type === 'textarea' ? 'lg:col-span-2' : ''}`}>
                      <label htmlFor={field.name} className="text-sm font-medium text-slate-500">{field.label}</label>

                      {field.type === 'textarea' ? (
                        <textarea
                          id={field.name}
                          value={value}
                          onChange={(event) => handleChange(field.name, event.target.value)}
                          rows={5}
                          placeholder={field.placeholder}
                          className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring-3 focus:ring-sky-100"
                        />
                      ) : (
                        <input
                          id={field.name}
                          type={field.type}
                          value={value}
                          onChange={(event) => handleChange(field.name, event.target.value)}
                          placeholder={field.placeholder}
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring-3 focus:ring-sky-100"
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {submitted && (
                <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                  表單已成功送出，感謝您的合作洽詢。
                </div>
              )}

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1E6091] px-6 py-3.5 text-base font-bold text-white shadow-[0_16px_30px_rgba(30,96,145,0.18)] transition hover:bg-[#174d76]"
              >
                送出詢問
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
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
