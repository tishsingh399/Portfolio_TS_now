'use client';

import { motion } from 'motion/react';
import dynamic from 'next/dynamic';

const PixelBlast = dynamic(() => import('./PixelBlast'), { ssr: false });

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 0 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Introduction"
    >
      {/* PixelBlast WebGL background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#B19EEF"
          patternScale={2.25}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Subtle grid overlay — parallax on scroll */}
      <HeroGrid />

      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '0 60px',
          position: 'relative',
          zIndex: 1,
          width: '100%',
        }}
      >
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          style={{
            fontFamily: 'var(--font-archivo)',
            fontSize: 'clamp(72px, 13vw, 180px)',
            fontWeight: 900,
            lineHeight: 0.88,
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            marginBottom: '48px',
          }}
        >
          Tina
          <br />
          Singh
        </motion.h1>

        {/* Meta band */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          style={{
            display: 'flex',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
            marginBottom: '40px',
            flexWrap: 'wrap',
          }}
          aria-label="Role information"
        >
          {[
            'Senior Product Designer',
            'Design Systems · Enterprise UX',
            'Edmonton, AB — Open to remote',
            'Available for new roles',
          ].map((text, i) => (
            <span
              key={i}
              style={{
                padding: '16px 32px',
                borderRight: i < 3 ? '1px solid var(--border)' : 'none',
                fontFamily: 'var(--font-jetbrains-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
                letterSpacing: '0.1em',
                whiteSpace: 'nowrap',
                ...(i === 0 ? { paddingLeft: 0 } : {}),
              }}
            >
              {text}
            </span>
          ))}
        </motion.div>

        {/* One-liner */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease }}
          style={{
            fontFamily: 'var(--font-archivo)',
            fontSize: 'clamp(18px, 1.8vw, 26px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--text-secondary)',
            lineHeight: 1.4,
            maxWidth: '700px',
            marginBottom: '48px',
          }}
        >
          I design the system layer that governs how enterprise software
          <br />
          behaves across products, teams, and compliance requirements.
        </motion.p>

        {/* Scroll hint */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease }}
          style={{
            fontFamily: 'var(--font-jetbrains-mono)',
            fontSize: '11px',
            color: 'var(--text-muted)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          Scroll to explore
          <span
            style={{
              display: 'block',
              width: '40px',
              height: '1px',
              background: 'var(--text-muted)',
            }}
          />
        </motion.span>
      </div>
    </section>
  );
}

/* ── Parallax grid ── */
function HeroGrid() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px',
        pointerEvents: 'none',
        willChange: 'transform',
      }}
      ref={(el) => {
        if (!el) return;
        const onScroll = () => {
          el.style.transform = `translateY(${window.scrollY * 0.35}px)`;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
      }}
    />
  );
}
