import './globals.css';
import { SITE } from '@/lib/site';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');

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
    images: [`${siteUrl}/brand/og-cover.svg`],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} · Portfolio NMCNS & AI`,
    description: SITE.tagline,
    images: [`${siteUrl}/brand/og-cover.svg`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
