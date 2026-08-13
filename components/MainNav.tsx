'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const navItems = [
  { label: '首頁', href: '/', key: 'home' },
  { label: '關於計畫', href: '/about', key: 'about' },
  { label: '認識 AIoT', href: '/learn', key: 'learn' },
  { label: 'AIoT 動手玩', href: '/hands-on', key: 'hands-on' },
  { label: '活動成果', href: '/programs', key: 'programs' },
  { label: '最新消息', href: '/news', key: 'news' },
  { label: '聯絡我們', href: '/contact', key: 'contact' },
];

export function MainNav({
  current,
  ctaHref,
  ctaLabel,
}: {
  current: string;
  ctaHref: string;
  ctaLabel: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center">
            <img
              src="/National_Taipei_University_of_Education_logo.svg.webp"
              alt="國立臺北教育大學校徽"
              className="h-8 w-8 object-contain"
            />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-600">Future Tech</p>
            <h1 className="text-base font-black tracking-tight text-slate-800 sm:text-xl">AIoT 推廣科學營</h1>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={
                item.key === current
                  ? 'text-sm font-medium text-sky-700 transition hover:text-sky-800'
                  : 'text-sm font-medium text-slate-600 transition hover:text-sky-700'
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-full bg-[#1E6091] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-[#174d76]"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? '關閉選單' : '開啟選單'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 transition hover:bg-slate-50 md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={
                  item.key === current
                    ? 'rounded-xl bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-700'
                    : 'rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-sky-700'
                }
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={ctaHref}
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#1E6091] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-200"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
