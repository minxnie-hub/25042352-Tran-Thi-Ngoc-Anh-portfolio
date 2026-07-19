import Logo from './Logo';
import { SITE } from '@/lib/site';

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3.75 5.75h16.5v12.5H3.75z" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7.2 3.75H4.75a1 1 0 0 0-1 1C3.75 13.31 10.69 20.25 19.25 20.25a1 1 0 0 0 1-1V16.8l-4.1-1.15-1.35 2.06a13.9 13.9 0 0 1-8.51-8.51l2.06-1.35L7.2 3.75Z" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__top">
        <Logo compact />
        <p><span lang="ko">감사합니다</span> · Cảm ơn bạn đã ghé xem portfolio của tôi.</p>
      </div>
      <div className="site-footer__contact" aria-label="Thông tin liên hệ">
        <a href={`mailto:${SITE.email}`} aria-label={`Gửi email đến ${SITE.email}`}>
          <MailIcon />
          <span>{SITE.email}</span>
        </a>
        <a href={`tel:${SITE.phone}`} aria-label={`Gọi số ${SITE.phone}`}>
          <PhoneIcon />
          <span>{SITE.phone}</span>
        </a>
      </div>
      <div className="site-footer__bottom">
        <span>© 2026 Trần Thị Ngọc Anh</span>
        <a href="#top">Lên đầu trang ↑</a>
      </div>
    </footer>
  );
}
