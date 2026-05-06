import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PrimeBrand AI - 5060 프리미엄 브랜드 진단',
  description: '5060 고경력 전문가를 위한 AI 기반 맞춤형 퍼스널 브랜드 진단 서비스',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-accent/30">{children}</body>
    </html>
  );
}