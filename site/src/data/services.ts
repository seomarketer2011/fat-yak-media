export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string; // filename in src/assets/icons
  illustration: string; // base name in src/assets/images
  excerpt: string;
  description: string;
  bullets: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: 'local-seo',
    title: 'Local SEO & Google Business Profile',
    shortTitle: 'Local SEO',
    icon: 'places-optimizations',
    illustration: 'illus-seo',
    excerpt:
      'Own the map pack. We optimise your Google Business Profile, citations and reviews so nearby customers find you first.',
    description:
      'When someone searches "near me", the map pack takes the lion\'s share of clicks. We build and optimise your Google Business Profile, clean up your citations across every directory that matters, and put a review engine in place so your business earns the top spots for the searches that pay.',
    bullets: [
      'Google Business Profile setup & optimisation',
      'Citation building and NAP consistency audits',
      'Review generation strategy and response management',
      'Local landing pages for every suburb you serve',
      'Local link building with community relevance',
      'Monthly map-pack ranking reports',
    ],
    faqs: [
      {
        q: 'How long does local SEO take to work?',
        a: 'Most local businesses see measurable map-pack movement within 60–90 days. Competitive metro areas can take longer, but quick wins like profile optimisation and citation cleanup often lift visibility in the first month.',
      },
      {
        q: 'Do I need a physical storefront?',
        a: 'No. Service-area businesses (tradies, mobile services, consultants) can absolutely rank in the map pack. We configure your profile and pages around the areas you serve.',
      },
    ],
  },
  {
    slug: 'seo',
    title: 'Search Engine Optimisation',
    shortTitle: 'SEO',
    icon: 'search-engine-optimization',
    illustration: 'illus-analytics',
    excerpt:
      'Technical audits, on-page fixes and content strategy that move you up the organic rankings — and keep you there.',
    description:
      'Rankings are earned with fundamentals done properly: a technically clean site, pages built around the keywords your customers actually type, and content that answers their questions better than anyone else. We handle the whole stack, from crawl budget to copy.',
    bullets: [
      'Full technical SEO audit and fix implementation',
      'Keyword research mapped to buyer intent',
      'On-page optimisation: titles, schema, internal linking',
      'Content strategy and SEO copywriting',
      'Authority link building',
      'Transparent monthly reporting on rankings and revenue',
    ],
    faqs: [
      {
        q: 'What makes your SEO different?',
        a: 'We report on enquiries and revenue, not just rankings. Every campaign starts with the searches that indicate buying intent for your business, and everything we build is measured against the leads it produces.',
      },
      {
        q: 'Do you lock clients into contracts?',
        a: 'No lock-in contracts. We earn the next month by delivering this one.',
      },
    ],
  },
  {
    slug: 'web-design',
    title: 'Web Design & Development',
    shortTitle: 'Web Design',
    icon: 'responsive-design',
    illustration: 'illus-web-design',
    excerpt:
      'Fast, mobile-first websites engineered to rank and built to convert visitors into enquiries.',
    description:
      "A slow, dated website leaks customers. We design and build lightning-fast, mobile-first sites with SEO baked in from the first line of code — so your site looks the part, loads instantly and turns traffic into phone calls and bookings.",
    bullets: [
      'Custom design that reflects your brand',
      'Static-first builds with sub-second load times',
      'Mobile-first, accessible and conversion-focused',
      'SEO-ready structure, schema and metadata',
      'Landing pages for campaigns and service areas',
      'Ongoing care plans and content updates',
    ],
    faqs: [
      {
        q: 'How long does a website build take?',
        a: 'A typical small-business site launches in 3–6 weeks depending on scope. Landing pages can go live in days.',
      },
      {
        q: 'Will my site be fast?',
        a: 'Yes — speed is the whole point. We ship static-first builds that score green on Core Web Vitals, which helps both rankings and conversions.',
      },
    ],
  },
  {
    slug: 'social-media',
    title: 'Social Media Marketing',
    shortTitle: 'Social Media',
    icon: 'social-media-marketing',
    illustration: 'illus-social-media',
    excerpt:
      'Content and community management that builds a local following and keeps your brand front of mind.',
    description:
      "Social proof sells, especially locally. We plan, create and publish content that showcases your work, engages your community and keeps your business the obvious choice when locals need what you do.",
    bullets: [
      'Content calendars planned around your seasons',
      'Post creation: copy, graphics and short video',
      'Community management and enquiry handling',
      'Local audience growth campaigns',
      'Paid social amplification',
      'Monthly engagement and lead reporting',
    ],
    faqs: [
      {
        q: 'Which platforms should my business be on?',
        a: "Wherever your customers are — for most local businesses that's Facebook and Instagram, with LinkedIn for B2B and TikTok where the audience fits. We focus effort where it returns enquiries, not vanity metrics.",
      },
    ],
  },
  {
    slug: 'ppc',
    title: 'Google Ads & PPC',
    shortTitle: 'Google Ads',
    icon: 'conversion-optimization',
    illustration: 'illus-ppc',
    excerpt:
      'Tightly-managed Google Ads campaigns that put you at the top of the page today, at a cost per lead that makes sense.',
    description:
      'While SEO compounds, paid search delivers now. We build tightly-themed campaigns around the keywords that convert, ruthlessly cut wasted spend, and optimise landing pages so every dollar works harder.',
    bullets: [
      'Google Search, Maps and Local Services Ads',
      'Keyword and competitor research',
      'Ad copywriting and extension setup',
      'Landing page design and CRO',
      'Negative keyword and bid management',
      'Cost-per-lead reporting you can read in a minute',
    ],
    faqs: [
      {
        q: 'What budget do I need for Google Ads?',
        a: 'It depends on your market, but most local campaigns start delivering leads from $30–$50/day in ad spend. We recommend a budget after researching your keywords and competition.',
      },
    ],
  },
  {
    slug: 'content',
    title: 'Content & Email Marketing',
    shortTitle: 'Content & Email',
    icon: 'seo-copywriting',
    illustration: 'illus-email-marketing',
    excerpt:
      'SEO copywriting, blogs and email campaigns that nurture your list and feed your rankings.',
    description:
      "Content does double duty: it earns rankings and it nurtures the customers you already have. We write service pages, blogs and email campaigns in your voice, built around the questions your customers ask.",
    bullets: [
      'SEO copywriting for service and location pages',
      'Blog strategy and monthly publishing',
      'Email newsletters and automation',
      'Lead magnet creation',
      'Review and case-study content',
      'Performance reporting on traffic and enquiries',
    ],
    faqs: [
      {
        q: 'Do you write the content or do I?',
        a: 'We do the writing — researched, in your brand voice, and reviewed by you before anything goes live. Your job is a quick approval, not a homework assignment.',
      },
    ],
  },
];
