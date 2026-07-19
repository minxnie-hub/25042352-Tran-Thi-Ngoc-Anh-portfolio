import Logo from './Logo';
import { asset } from '@/lib/site';

export default function SiteHeader({ detail = false }) {
  return (
    <header className={`site-header ${detail ? 'site-header--detail' : ''}`}>
      <Logo />
      <nav className="site-nav" aria-label="Điều hướng chính">
        <a href={detail ? asset('/#about') : '#about'}>Giới thiệu</a>
        <a href={detail ? asset('/#projects') : '#projects'}>Bài tập</a>
        <a href={detail ? asset('/#reflection') : '#reflection'}>Tổng kết</a>
        <a className="nav-pill" href="#contact">Liên hệ</a>
      </nav>
    </header>
  );
}
