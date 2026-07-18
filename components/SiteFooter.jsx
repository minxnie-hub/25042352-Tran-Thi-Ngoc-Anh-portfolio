import Logo from './Logo';
import { SITE } from '@/lib/site';

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__top">
        <Logo compact />
        <p>감사합니다 · Cảm ơn bạn đã ghé xem portfolio của tôi.</p>
      </div>
      <div className="site-footer__contact">
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
      </div>
      <div className="site-footer__bottom">
        <span>© 2026 Trần Thị Ngọc Anh</span>
        <a href="#top">Lên đầu trang ↑</a>
      </div>
    </footer>
  );
}
