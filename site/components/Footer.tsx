import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)' }}>
      {/* Giant name — Kunai pattern */}
      <div className="footer-giant-name" aria-hidden="true">
        TINA SINGH
      </div>

      {/* Bottom bar */}
      <div
        style={{
          padding: '40px 60px',
          borderTop: '1px solid var(--border)',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-jetbrains-mono)',
            fontSize: '11px',
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
          }}
        >
          Tina Singh — 2025
        </span>

        <ul style={{ display: 'flex', gap: '48px', listStyle: 'none', justifyContent: 'center' }}>
          {[
            { label: 'Work', href: '/#work' },
            { label: 'About', href: '/#about' },
            { label: 'Contact', href: '/#contact' },
          ].map(({ label, href }) => (
            <li key={label}>
              <Link href={href} className="footer-nav-link">{label}</Link>
            </li>
          ))}
        </ul>

        <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', justifyContent: 'flex-end' }}>
          {['LinkedIn', 'Dribbble', 'Behance'].map((name) => (
            <li key={name}>
              <Link href="#" className="footer-nav-link">{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
