import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "未來科技啟航：AIoT 推廣科學營",
  description: "動手玩科技，打造會感受、會判斷、會反應的智慧生活！國科會大眾科學教育計畫。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
