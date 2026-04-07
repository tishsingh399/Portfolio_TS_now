export interface CaseStudy {
  slug: string;
  number: string;
  tag: string;
  displayTitle: string[];   // lines of the big display title
  cardSubtitle: string;
  role: string;
  tools: string;
  team: string;
  timeline: string;
  overview: string;
  next: string;
  nextTitle: string;
}

export const CASES: CaseStudy[] = [
  {
    slug: 'ds-rebuild',
    number: '01',
    tag: 'Design Systems',
    displayTitle: ['DESIGN', 'SYSTEM', 'REBUILD'],
    cardSubtitle: '40% → <1% detach · 61K+ insertions/quarter · 11 teams',
    role: 'Design Systems Lead',
    tools: 'Figma, Tokens Studio, GitHub',
    team: '11 product teams, Engineering, QA',
    timeline: '3 years (ongoing)',
    overview:
      'Three years building and governing a design system for an enterprise cybersecurity company ($400M+ ARR) that sells to every US cabinet-level agency. 6 products, 11 teams, 791 design tokens.',
    next: 'nav',
    nextTitle: 'Platform Navigation →',
  },
  {
    slug: 'nav',
    number: '02',
    tag: 'Interaction Architecture',
    displayTitle: ['PLATFORM', 'NAVIGATION'],
    cardSubtitle: '60% fewer dev support tickets · 100% token compliance',
    role: 'Senior Product Designer',
    tools: 'Figma, ProtoPie, FigJam',
    team: '3 product teams, Engineering',
    timeline: 'Q1 2025',
    overview:
      'Systems architecture for scalable usability — redesigning the navigation layer across 6 enterprise products.',
    next: 'finance',
    nextTitle: 'Finance Dashboard →',
  },
  {
    slug: 'finance',
    number: '03',
    tag: 'Enterprise UX',
    displayTitle: ['FINANCE', 'DASHBOARD'],
    cardSubtitle: 'SAP Finance at McKinsey · Reduced task time by 40%',
    role: 'UX Designer',
    tools: 'Figma, SAP Fiori',
    team: 'McKinsey Digital, Finance SMEs',
    timeline: '2023',
    overview:
      'Redesigning the finance process dashboard for enterprise SAP at McKinsey — from approval flows to exception handling.',
    next: 'inline-alert',
    nextTitle: 'Inline Alert →',
  },
  {
    slug: 'inline-alert',
    number: '04',
    tag: 'Component Design',
    displayTitle: ['INLINE', 'ALERT'],
    cardSubtitle: '70% reduction in banner misuse · 7+ teams adopted',
    role: 'UX Designer, Design Systems',
    tools: 'Figma, Tokens Studio',
    team: '5+ product teams',
    timeline: 'Feb – May 2025',
    overview:
      'A clear system for banners, toasts, and inline alerts — solving the taxonomy problem that caused 40% of all feedback tickets.',
    next: 'login',
    nextTitle: 'Login Redesign →',
  },
  {
    slug: 'login',
    number: '05',
    tag: 'Product Design',
    displayTitle: ['LOGIN', 'REDESIGN'],
    cardSubtitle: 'A system fix disguised as a small update · Unblocked in 4 weeks',
    role: 'Senior Product Designer',
    tools: 'Figma, Tokens Studio',
    team: 'Product, Engineering, Security',
    timeline: '4 weeks, 2024',
    overview:
      'What looked like a login page redesign was actually a federated identity architecture decision. The UI was the easy part.',
    next: 'ds-rebuild',
    nextTitle: 'Design System Rebuild →',
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}

export function generateStaticSlugs() {
  return CASES.map((c) => ({ slug: c.slug }));
}
