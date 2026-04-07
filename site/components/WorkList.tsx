'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { CASES } from '@/lib/cases';
import Reveal from './Reveal';

export default function WorkList() {
  return (
    <div role="list">
      {CASES.map((c, i) => {
        const isAlt = i % 2 !== 0;
        return (
          <Reveal key={c.slug} delay={0.05 * i}>
            <Link href={`/work/${c.slug}`} aria-label={`${c.displayTitle.join(' ')} case study`}>
              <motion.article
                role="listitem"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  minHeight: '520px',
                  borderTop: '1px solid var(--border)',
                  cursor: 'pointer',
                  direction: isAlt ? 'rtl' : 'ltr',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'transparent',
                  transition: 'background 0.4s',
                }}
                whileHover={{ background: '#0D0D0D' } as never}
              >
                {/* Info panel */}
                <div
                  style={{
                    padding: '64px 60px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    direction: 'ltr',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-jetbrains-mono)',
                      fontSize: '11px',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.16em',
                    }}
                  >
                    {c.number}
                  </span>

                  <motion.h3
                    style={{
                      fontFamily: 'var(--font-archivo)',
                      fontSize: 'clamp(48px, 7vw, 96px)',
                      fontWeight: 900,
                      lineHeight: 0.92,
                      letterSpacing: '-0.04em',
                      color: 'var(--text-primary)',
                    }}
                    whileHover={{ y: -4 } as never}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {c.displayTitle.map((line, li) => (
                      <span key={li} style={{ display: 'block' }}>
                        {line}
                      </span>
                    ))}
                  </motion.h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-jetbrains-mono)',
                        fontSize: '11px',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.12em',
                        border: '1px solid var(--border)',
                        padding: '6px 12px',
                        width: 'fit-content',
                        textTransform: 'uppercase',
                      }}
                    >
                      {c.tag}
                    </span>
                    <p
                      style={{
                        fontSize: '14px',
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-jetbrains-mono)',
                        letterSpacing: '0.04em',
                        lineHeight: 1.6,
                      }}
                      dangerouslySetInnerHTML={{ __html: c.cardSubtitle }}
                    />
                    <motion.span
                      style={{
                        fontFamily: 'var(--font-jetbrains-mono)',
                        fontSize: '11px',
                        color: 'var(--text-secondary)',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                      whileHover={{ gap: '20px' } as never}
                      transition={{ duration: 0.3 }}
                    >
                      View project →
                    </motion.span>
                  </div>
                </div>

                {/* Visual panel */}
                <div
                  style={{
                    borderLeft: isAlt ? 'none' : '1px solid var(--border)',
                    borderRight: isAlt ? '1px solid var(--border)' : 'none',
                    background: 'var(--surface)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '10px',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.1em',
                    direction: 'ltr',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                  aria-hidden="true"
                >
                  {/* placeholder — replace with <Image> when real screenshots exist */}
                  Cover — 1:1.1
                </div>
              </motion.article>
            </Link>
          </Reveal>
        );
      })}
      {/* Close the work list border */}
      <div style={{ borderBottom: '1px solid var(--border)' }} />
    </div>
  );
}
