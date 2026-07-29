export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string; // filename in src/assets/icons
  illustration: string; // base name in src/assets/images
  excerpt: string;
  /** What the customer is actually trying to buy — the outcome, in their words */
  reality: {
    heading: string;
    text: string;
    signals: string[]; // "you know you need this when..."
  };
  /** How Fat Yak delivers it differently */
  magic: { title: string; text: string }[];
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
      'You don\'t want "rankings" — you want to be the business Google hands the customer to. We make you the obvious first call in your area.',
    reality: {
      heading: 'You want the phone to ring — not a rankings report',
      text: 'Nobody wakes up wanting citations and NAP consistency. What you actually want is simple: when someone nearby pulls out their phone and searches for what you do, your name is the one they see, your reviews are the ones they trust, and your number is the one they tap. Everything else is plumbing.',
      signals: [
        'Competitors with worse work and worse reviews outrank you on the map',
        'Your Google profile was set up once, years ago, and never touched again',
        'Customers say "I didn\'t know you were even in the area"',
        'You rely on word of mouth because Google brings you nothing',
      ],
    },
    magic: [
      {
        title: 'We optimise for the tap, not the rank',
        text: 'Rank three with 200 five-star reviews beats rank one with twelve. We work the whole decision — photos, reviews, categories, replies — so searchers choose you, not just find you.',
      },
      {
        title: 'A suburb page for every dollar-earning area',
        text: 'Google ranks pages, not promises. We build a fast, genuinely useful page for each suburb you serve, so "your trade + their suburb" finds you every time.',
      },
      {
        title: 'Reviews on autopilot',
        text: 'We set up a review engine your team actually uses — a link, a QR code, a follow-up message — so your reputation compounds while you work.',
      },
    ],
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
      "You want leads that show up whether or not you're paying for ads that week. We build search traffic you own, not rent.",
    reality: {
      heading: 'You want leads you own, not leads you rent',
      text: "Ads stop the second the budget does. What you're really buying with SEO is an asset: a website that pulls in ready-to-buy searchers month after month, without a per-click bill attached. You want to stop renting attention and start owning it — and you want proof it's working in numbers you can read.",
      signals: [
        'Your ad spend keeps creeping up but leads stay flat',
        "You Google your own services and can't find yourself",
        'A competitor half your size owns page one',
        "You've been burned by an agency that reported \"impressions\"",
      ],
    },
    magic: [
      {
        title: 'Money keywords first',
        text: 'We start with the searches that mean "wallet out" — the emergency jobs, the quote requests, the comparisons — and win those before chasing traffic that looks good in a chart.',
      },
      {
        title: 'Fix the boat before rowing harder',
        text: 'Most sites leak rankings through slow pages and crawl mess. We fix the technical foundation first, so every piece of content we add actually sticks.',
      },
      {
        title: 'Reports your accountant could read',
        text: 'One page a month: what we did, what moved, what it earned you. Enquiries and revenue, not sessions and impressions.',
      },
    ],
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
      "You don't need a prettier website — you need one that makes people pick up the phone. We build sites that sell while they load in under a second.",
    reality: {
      heading: 'You want a site that closes the deal at 9pm on a Tuesday',
      text: "Your website has one job: convince a stranger, in about eight seconds, that you're the safe choice — then make contacting you effortless. That's what you're really buying. Not a design award. Not a slideshow. A tireless salesperson that works nights, weekends and public holidays.",
      signals: [
        "You're embarrassed to put your web address on the van",
        'The site looks fine on your desktop and broken on every phone',
        'People visit, but nobody calls or books',
        'Updating a phone number requires emailing a developer and waiting a week',
      ],
    },
    magic: [
      {
        title: 'Speed as a feature, not a boast',
        text: 'We ship static-first builds — the same stack as this site — that load in under a second on a phone in a car park. Fast sites rank better and convert better. Slow ones quietly cost you jobs.',
      },
      {
        title: 'Designed around the call to action',
        text: 'Every page is laid out backwards from the thing you want visitors to do: call, book, get a quote. Proof up top, trust signals in reach, a big obvious button that follows them down the page.',
      },
      {
        title: 'SEO baked in, not bolted on',
        text: 'Structure, schema, metadata and suburb pages are part of the build, not a later invoice. Your site starts its SEO career on day one.',
      },
    ],
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
      "You want to look alive, trusted and busy when a potential customer checks you out — without spending your evenings making posts.",
    reality: {
      heading: 'You want to pass the "are they legit?" check — every time',
      text: "Here's what actually happens: someone hears about you, opens Instagram or Facebook, and makes a snap judgement. A dead page whispers \"out of business\". What you're really buying is social proof on tap — a feed that shows real work, real customers and real replies, so that snap judgement always lands in your favour. And you want it without giving up your Sunday nights.",
      signals: [
        'Your last post is from eleven months ago and it shows',
        'You get DMs asking things your page should already answer',
        "Competitors look busier than you even though they aren't",
        'You know you should post but never know what',
      ],
    },
    magic: [
      {
        title: 'Your work is the content',
        text: "We mine what you already do — jobs finished, customers helped, questions answered — and turn it into posts that feel like you, not like an agency wearing your logo.",
      },
      {
        title: 'Local eyeballs only',
        text: "A thousand followers in your service area beat a hundred thousand strangers. We grow the audience that can actually walk through your door.",
      },
      {
        title: 'We answer the DMs too',
        text: 'Social enquiries are leads. We manage comments and messages so a 10pm "how much for..." gets a reply before your competitor wakes up.',
      },
    ],
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
      'You want leads this week at a cost per job you can say out loud. We run tight campaigns that buy customers, not clicks.',
    reality: {
      heading: 'You want to know what a customer costs — then buy more of them',
      text: "Google Ads isn't complicated at heart: you're buying customers. What you really want to know is \"if I put in a dollar, what comes back?\" — and then to turn that dial up with confidence. The fear is real too: everyone knows someone who torched a budget on clicks that went nowhere. Our job is to make the maths boring and the results not.",
      signals: [
        "You need leads now, not in the 'SEO takes months' timeframe",
        "You've tried running ads yourself and fed money into a mystery",
        'An old agency sent reports full of clicks and never mentioned jobs',
        'You have capacity sitting idle and want to fill it on demand',
      ],
    },
    magic: [
      {
        title: 'Every dollar tracked to a phone call',
        text: 'Call tracking and form tracking go in before the first ad runs. You\'ll know which keyword produced which job — so cutting waste is a decision, not a guess.',
      },
      {
        title: 'Landing pages built to convert the click',
        text: "We never send paid traffic to your homepage. Every campaign gets a purpose-built page that answers the exact search and asks for the job.",
      },
      {
        title: 'Waste-cutting as a weekly habit',
        text: 'Negative keywords, dayparting, suburb-level bids — we prune spend every week so your budget concentrates on the searches that book.',
      },
    ],
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
      'You want customers who come back — and rankings that grow — without writing a word yourself. We do the writing; you do the approving.',
    reality: {
      heading: "You want repeat business without becoming a part-time writer",
      text: "The cheapest customer you'll ever win is the one you already have — and the easiest ranking you'll ever earn answers a question your customers ask every week. What you're really buying here is both, on autopilot: content that keeps Google feeding you new people and emails that keep past customers coming back, none of it written by you at 11pm.",
      signals: [
        'You have hundreds of past customers and no way to reach them',
        'Your blog has three posts, the newest from 2021',
        'Customers ask the same ten questions on every job',
        "You know email 'works' but yours never leaves the drafts folder",
      ],
    },
    magic: [
      {
        title: 'Your FAQs become your rankings',
        text: 'The questions customers ask you in person are the ones they ask Google at midnight. We turn your answers into pages that rank and pre-sell.',
      },
      {
        title: 'Emails people don\'t delete',
        text: 'Short, useful, occasionally funny — seasonal reminders, tips and offers that read like a note from a tradesperson they trust, not a corporation.',
      },
      {
        title: 'One hour of your brain, once a month',
        text: 'We interview you briefly, then do everything else — research, writing, publishing, sending. You approve it from your phone.',
      },
    ],
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
