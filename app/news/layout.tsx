import { pageMetadata } from '../../lib/seo';

// page.tsx is a client component, so its metadata lives in this segment layout.
export const metadata = pageMetadata({
  title: '最新消息',
  description:
    'AIoT 推廣科學營最新消息：營隊開課公告、學生作品成果交流紀錄與媒體報導，掌握國北教大執行之國科會大眾科學教育計畫，在各地國小推動 AI 與物聯網教育的最新動態。',
  path: '/news',
});

export default function NewsLayout({ children }: LayoutProps<'/news'>) {
  return children;
}
