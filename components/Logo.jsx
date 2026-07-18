import Link from 'next/link';
import { asset } from '@/lib/site';

export default function Logo({ compact = false }) {
  return (
    <Link className={`brand ${compact ? 'brand--compact' : ''}`} href="/" aria-label="Về trang chủ">
      <img className="brand__mark" src={asset('/brand/ngoc-anh-mark.svg')} alt="" width="48" height="48" />
      <span className="brand__text">
        <strong>Ngọc Anh</strong>
        {!compact && <small>25042352 · Portfolio</small>}
      </span>
    </Link>
  );
}
