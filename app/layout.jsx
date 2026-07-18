import './globals.css';
import { SITE } from '@/lib/site';
import localFont from 'next/font/local';

const epilogue = localFont({
  src: '../public/fonts/Epilogue-VariableFont_wght.ttf',
  variable: '--font-epilogue',
  display: 'swap',
  weight: '100 900',
});


const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE.name} · Portfolio NMCNS & AI`,
    template: `%s · ${SITE.shortName}`,
  },
  description: `Portfolio học tập của ${SITE.name}, MSSV ${SITE.studentId}, Khoa Ngôn ngữ và Văn hóa Hàn Quốc, ULIS - ĐHQGHN.`,
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
  openGraph: {
    title: `${SITE.name} · Portfolio NMCNS & AI`,
    description: SITE.tagline,
    images: [`${basePath}/brand/og-cover.svg`],
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={epilogue.variable}>
      <body>{children}</body>
    </html>
  );
}
