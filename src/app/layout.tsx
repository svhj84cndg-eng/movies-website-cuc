import type { Metadata } from 'next';
import { Noto_Sans_SC, Noto_Serif_SC } from 'next/font/google';
import './globals.css';

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin', 'chinese-simplified'],
  variable: '--font-noto-sans',
  display: 'swap',
  weight: ['300', '400', '500', '700'],
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ['latin', 'chinese-simplified'],
  variable: '--font-noto-serif',
  display: 'swap',
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: '经典电影浏览',
  description: '浏览和搜索经典电影，包含评分、年份、导演、类型等详细信息',
  keywords: ['电影', '经典电影', '电影评分', '电影搜索', '豆瓣高分'],
  authors: [{ name: 'Classic Movies' }],
  openGraph: {
    title: '经典电影浏览',
    description: '浏览和搜索经典电影',
    type: 'website',
    locale: 'zh_CN',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${notoSansSC.variable} ${notoSerifSC.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-neutral-900 bg-neutral-50">
        {children}
      </body>
    </html>
  );
}