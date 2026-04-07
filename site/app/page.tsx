import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import WorkList from '@/components/WorkList';
import Reveal from '@/components/Reveal';
import Footer from '@/components/Footer';

const container = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 60px',
};

const sectionKicker = {
  fontFamily: 'var(--font-jetbrains-mono)' as const,
  fontSize: '11px' as const,
  color: 'var(--text-muted)',
  letterSpacing: '0.16em',
  textTransform: 'uppercase' as const,
  marginBottom: '24px',
};

const sectionDisplay = {
  fontFamily: 'var(--font-archivo)' as const,
  fontSize: 'clamp(56px, 8vw, 120px)' as const,
  fontWeight: 900 as const,
  lineHeight: 0.9 as const,
  letterSpacing: '-0.04em' as const,
  color: 'var(--text-primary)',
};

const border = '1px solid var(--border)';

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <Hero />

      {/* ── METRICS ── */}
      <section style={{ borderTop: border, borderBottom: border }} aria-label="Impact metrics">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { label: 'Products', value: '6' },
            { label: 'Teams', value: '11' },
            { label: 'Detach Rate', value: '<1%' },
            { label: 'Compliance', value: 'S.508', small: true },
          ].map(({ label, value, small }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="metric-box" style={{ borderRight: i < 3 ? border : 'none' }}>
                <p style={sectionKicker}>{label}</p>
                <span
                  style={{
                    fontFamily: 'var(--font-archivo)',
                    fontSize: small ? 'clamp(24px, 3vw, 42px)' : 'clamp(40px, 5vw, 72px)',
                    fontWeight: 900,
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    color: 'var(--text-primary)',
                  }}
                >
                  {value}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
      <section id="work" style={{ paddingTop: '160px', borderTop: border }} aria-label="Selected work">
        <Reveal>
          <div style={{ ...container, paddingBottom: '80px' }}>
            <p style={sectionKicker}>Selected work</p>
            <h2 style={sectionDisplay}>
              SELECTED
              <br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--text-muted)' }}>WORK</em>
            </h2>
          </div>
        </Reveal>
        <WorkList />
      </section>

      {/* ── PROCESS ── */}
      <section style={{ padding: '160px 0', borderTop: border }} aria-label="How I work">
        <div style={container}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'end',
              marginBottom: '100px',
            }}
          >
            <Reveal>
              <div>
                <p style={sectionKicker}>How I work</p>
                <h2 style={sectionDisplay}>
                  HOW I
                  <br />
                  <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--text-muted)' }}>WORK</em>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p style={{ fontSize: 'clamp(16px, 1.4vw, 20px)', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                I treat design systems as infrastructure — not style guides. Every decision is made once, encoded, and distributed so teams can ship without asking.
              </p>
            </Reveal>
          </div>

          {[
            {
              n: '01',
              title: 'Audit the system, not just the screen',
              desc: 'Before any wireframe, I map the decision landscape — which patterns are inconsistent, which are undocumented, where teams are detaching and why. The problem is never the component.',
            },
            {
              n: '02',
              title: 'Design for the token layer, not the pixel',
              desc: 'Every decision gets encoded. Color, spacing, motion, density — all expressed as semantic tokens so the system speaks the same language as the code. 791 tokens, zero magic numbers.',
            },
            {
              n: '03',
              title: 'Ship to teams, measure adoption',
              desc: 'A design system only works if teams use it. I embed with product teams, run office hours, write docs engineers actually read, and track detach rate like a product metric.',
            },
          ].map(({ n, title, desc }, i) => (
            <Reveal key={n} delay={i * 0.1}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: '40px',
                  padding: '48px 0',
                  borderTop: border,
                  alignItems: 'start',
                  ...(i === 2 ? { borderBottom: border } : {}),
                }}
              >
                <span style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.16em', paddingTop: '6px' }}>
                  {n}
                </span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-archivo)', fontSize: 'clamp(22px, 2vw, 30px)', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '12px', color: 'var(--text-primary)' }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.75 }}>
                    {desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: '160px 0', borderTop: border }} aria-label="About">
        <div style={container}>
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '100px', alignItems: 'start' }}>
            <div>
              <Reveal>
                <p style={sectionKicker}>About</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 style={{ ...sectionDisplay, fontSize: 'clamp(44px, 6vw, 80px)' as const }}>
                  I THINK<br />IN<br />
                  <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--text-muted)' }}>SYSTEMS</em>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p style={{ fontSize: 'clamp(17px, 1.5vw, 21px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: 1.65, marginTop: '40px' }}>
                  Three years building and governing a design system for an enterprise cybersecurity company ($400M+ ARR) that sells to every US cabinet-level agency. 6 products, 11 teams, 791 design tokens.
                </p>
              </Reveal>
            </div>

            <div>
              <Reveal delay={0.1}>
                <p style={{ ...sectionKicker, marginTop: '80px' }}>Specializations</p>
              </Reveal>
              <Reveal delay={0.15}>
                <ul style={{ listStyle: 'none' }} role="list" aria-label="Specializations">
                  {[
                    'Design Systems',
                    'Enterprise UX',
                    'Design Tokens & Theming',
                    'Component Architecture',
                    'AI-Augmented Workflows',
                    'Section 508 / WCAG Compliance',
                  ].map((skill) => (
                    <li key={skill} className="skill-row">{skill}</li>
                  ))}
                  <li style={{ borderBottom: border, padding: 0, listStyle: 'none' }} />
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: '160px 0', borderTop: border }} aria-label="Contact">
        <div style={container}>
          <Reveal>
            <p style={sectionKicker}>Get in touch</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 style={{ ...sectionDisplay, marginBottom: '48px' }}>
              LET&apos;S<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--text-muted)' }}>TALK</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontSize: 'clamp(16px, 1.4vw, 20px)', color: 'var(--text-muted)', fontFamily: 'var(--font-jetbrains-mono)', letterSpacing: '0.06em', maxWidth: '480px', lineHeight: 1.7, marginBottom: '48px' }}>
              Looking for senior design systems and product design roles at companies that take infrastructure seriously.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
              {[
                { label: 'Email', href: 'mailto:' },
                { label: 'LinkedIn', href: '#' },
                { label: 'Resume', href: '#' },
              ].map(({ label, href }) => (
                <a key={label} href={href} className="contact-link">
                  {label} ↗
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
