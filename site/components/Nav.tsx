'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: '24px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'background 0.4s',
        background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
      aria-label="Main navigation"
    >
      {/* TS monogram */}
      <Link href="/" aria-label="Tina Singh — home">
        <Image
          src="/ts-monogram.svg"
          alt="TS monogram"
          width={32}
          height={32}
          style={{ filter: 'invert(1)', opacity: 0.8 }}
          priority
        />
      </Link>

      <ul style={{ display: 'flex', gap: '48px', listStyle: 'none' }}>
        {[
          { label: 'Work', href: '/#work' },
          { label: 'About', href: '/#about' },
          { label: 'Contact', href: '/#contact' },
        ].map(({ label, href }) => (
          <li key={label}>
            <Link href={href} className="hover-primary" style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
