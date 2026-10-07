import { pageMetadata } from '../../lib/seo';

// page.tsx is a client component, so its metadata lives in this segment layout.
export const metadata = pageMetadata({
  title: '聯絡我們',
  description:
    '聯絡未來科技啟航：AIoT 推廣科學營。本計畫由國立臺北教育大學（國北教大）師資培育處執行、國科會指導，提供國小校園營隊、科普推廣、成果展示與教學交流等合作洽詢。',
  path: '/contact',
});

export default function ContactLayout({ children }: LayoutProps<'/contact'>) {
  return children;
}
