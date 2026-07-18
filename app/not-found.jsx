import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found">
      <span>404 · 별을 잃었어요</span>
      <h1>Trang này chưa có trong bản đồ sao.</h1>
      <Link className="button button--dark" href="/">Về portfolio</Link>
    </main>
  );
}
