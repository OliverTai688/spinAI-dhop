import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "誠問 AI - 將專業對話轉化為數位策略資產",
  description: "首款專為高階代辦顧問設計的「策略領域系統」。建立結構化、可重複、可規模化的成交邏輯。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className="antialiased selection:bg-[#C9A227] selection:text-black">
        {children}
      </body>
    </html>
  );
}
