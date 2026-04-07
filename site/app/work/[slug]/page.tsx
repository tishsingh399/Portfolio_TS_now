import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCaseBySlug, generateStaticSlugs } from '@/lib/cases';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return generateStaticSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) return {};
  return {
    title: `${c.displayTitle.join(' ')} — Tina Singh`,
    description: c.overview,
  };
}

const border = '1px solid var(--border)';
const monoStyle = {
  fontFamily: 'var(--font-jetbrains-mono)' as const,
  fontSize: '11px' as const,
  color: 'var(--text-muted)',
  letterSpacing: '0.12em' as const,
  textTransform: 'uppercase' as const,
};
const container = {
  maxWidth: '1320px',
  margin: '0 auto',
  padding: '0 60px',
};

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) notFound();

  return (
    <>
      <Nav />

      <main style={{ paddingTop: '100px' }}>
        {/* Back link */}
        <div style={container}>
          <Link
            href="/#work"
            className="hover-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '48px',
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            ← Back to work
          </Link>

          {/* Hero */}
          <Reveal>
            <section
              style={{ padding: '80px 0', borderBottom: border }}
              aria-label={`${c.displayTitle.join(' ')} case study`}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '80px',
                  alignItems: 'center',
                }}
              >
                <div>
                  <p style={{ ...monoStyle, marginBottom: '24px' }}>{c.tag}</p>
                  <h1
                    style={{
                      fontFamily: 'var(--font-archivo)',
                      fontSize: 'clamp(36px, 4vw, 60px)',
                      fontWeight: 900,
                      letterSpacing: '-0.03em',
                      lineHeight: 1.0,
                      marginBottom: '20px',
                    }}
                  >
                    {c.displayTitle.join(' ')}
                  </h1>
                  <p
                    style={{
                      ...monoStyle,
                      textTransform: 'none',
                      letterSpacing: '0.04em',
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: c.cardSubtitle }}
                  />
                </div>

                {/* Cover placeholder */}
                <div
                  style={{
                    aspectRatio: '16/10',
                    background: 'var(--surface)',
                    border,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '10px',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.1em',
                  }}
                  aria-hidden="true"
                >
                  Cover image — 16:10
                </div>
              </div>
            </section>
          </Reveal>

          {/* Metadata row */}
          <div style={{ borderBottom: border }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {[
                { label: 'Role', value: c.role },
                { label: 'Tools', value: c.tools },
                { label: 'Team', value: c.team },
                { label: 'Timeline', value: c.timeline },
              ].map(({ label, value }, i) => (
                <div
                  key={label}
                  style={{
                    padding: '32px 0',
                    paddingRight: '32px',
                    borderRight: i < 3 ? border : 'none',
                    marginRight: i < 3 ? '32px' : 0,
                  }}
                >
                  <p style={{ ...monoStyle, marginBottom: '10px' }}>{label}</p>
                  <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Body */}
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            padding: '100px 60px',
            display: 'flex',
            flexDirection: 'column',
            gap: '64px',
          }}
        >
          {[
            {
              heading: 'Overview',
              body: c.overview,
            },
            {
              heading: 'The Problem',
              body: 'Replace with problem statement. One sentence first — what was failing and why it mattered.',
              callout: 'Key insight or design principle. Stated plainly in one sentence.',
            },
            {
              heading: 'Research',
              body: 'Replace with research from Notion export.',
              image: true,
              caption: 'Affinity map / interview synthesis / journey map',
            },
            {
              heading: 'Design Decisions',
              body: 'Replace with approach and key decisions. Bold key decisions so skimmers can navigate.',
              image: true,
              caption: 'Before / after comparison',
            },
            {
              heading: 'Outcome',
              body: 'Replace with outcomes. Quantify where possible. What changed for users, not just what was shipped.',
            },
          ].map(({ heading, body, callout, image, caption }) => (
            <Reveal key={heading}>
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--font-archivo)',
                    fontSize: '20px',
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                    paddingBottom: '16px',
                    borderBottom: border,
                    marginBottom: '24px',
                  }}
                >
                  {heading}
                </h2>
                <p
                  style={{
                    fontSize: '15px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.85,
                    marginBottom: '16px',
                  }}
                >
                  {body}
                </p>
                {callout && (
                  <div
                    style={{
                      borderLeft: '1px solid var(--border-strong)',
                      padding: '20px 24px',
                      background: 'var(--surface)',
                      marginTop: '16px',
                    }}
                  >
                    <p
                      style={{
                        color: 'var(--text-secondary)',
                        fontStyle: 'italic',
                        fontSize: '15px',
                        lineHeight: 1.7,
                      }}
                    >
                      {callout}
                    </p>
                  </div>
                )}
                {image && (
                  <>
                    <div
                      style={{
                        aspectRatio: '16/9',
                        background: 'var(--surface)',
                        border,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-jetbrains-mono)',
                        fontSize: '10px',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.1em',
                        marginTop: '24px',
                      }}
                      aria-hidden="true"
                    >
                      Screenshot or mockup — 16:9
                    </div>
                    {caption && (
                      <p
                        style={{
                          fontFamily: 'var(--font-jetbrains-mono)',
                          fontSize: '10px',
                          color: 'var(--text-muted)',
                          textAlign: 'center',
                          marginTop: '12px',
                          letterSpacing: '0.08em',
                        }}
                      >
                        {caption}
                      </p>
                    )}
                  </>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Next project */}
        <div style={container}>
          <div
            style={{
              padding: '80px 0',
              borderTop: border,
              textAlign: 'center',
            }}
          >
            <p style={{ ...monoStyle, marginBottom: '20px' }}>Next project</p>
            <Link
              href={`/work/${c.next}`}
              className="hover-primary-from-secondary"
              style={{
                fontFamily: 'var(--font-archivo)',
                fontSize: 'clamp(32px, 4vw, 56px)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
              }}
            >
              {c.nextTitle}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
