import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "5060 프리미엄 퍼스널 브랜드 매니지먼트",
  description: "경험을 지혜로 바꾸는 커리어 전환 전문가",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        {children}
      </body>
    </html>
  );
}
