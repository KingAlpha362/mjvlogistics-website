import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PageContainer } from '../layout/PageContainer';

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Courier services' },
  { href: '#leadership', label: 'Team' },
  { href: '#contact', label: 'Book delivery' },
];

export function Navbar() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(el, { y: -16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.05 });
    }, el);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 24;
      rootRef.current?.classList.toggle('shadow-md', scrolled);
      rootRef.current?.classList.toggle('py-3', scrolled);
      rootRef.current?.classList.toggle('py-4', !scrolled);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      ref={rootRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/70 py-4 shadow-sm backdrop-blur-xl transition-[padding,box-shadow] duration-300"
    >
      <PageContainer className="flex items-center justify-between gap-4">
        <a href="#home" className="shrink-0 outline-none ring-brand focus-visible:ring-2 ring-offset-2 rounded">
          <img
            src="images-mjv/mjv_logistics-logo.png"
            alt="MJV Courier"
            className="h-10 w-auto md:h-11"
            width="160"
            height="48"
          />
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-semibold text-courier-ink/90 transition hover:text-brand"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:px-5 md:text-base"
        >
          Get a quote
        </a>
      </PageContainer>
    </header>
  );
}
