export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string; // filename in src/assets/icons
  illustration: string; // base name in src/assets/images
  excerpt: string;
  /** The customer's problem, in their words — no trade jargon */
  problem: {
    heading: string;
    text: string;
    signals: string[]; // "sound familiar?" moments
  };
  /** Our answer, in plain English */
  answer: {
    heading: string;
    text: string;
  };
  /** How we pull it off — three plain promises */
  magic: { title: string; text: string }[];
  bullets: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: 'local-seo',
    title: 'Be the first business locals find',
    shortTitle: 'Get found nearby',
    icon: 'places-optimizations',
    illustration: 'illus-seo',
    excerpt:
      "People nearby search for what you do every single day. Right now they're calling someone else. We make sure the name they see — and the number they tap — is yours.",
    problem: {
      heading: "Locals need what you do. They just can't find you.",
      text: "Someone two suburbs over pulls out their phone and types what you do. Google shows them a map with three businesses on it. If you're not one of the three, that customer never knew you existed — they just called whoever was. That's happening every day, and it's costing you jobs you never even knew about.",
      signals: [
        'Businesses with worse work and worse reviews show up above you',
        'Your Google listing was set up once, years ago, and never touched again',
        'Customers say "I didn\'t know you were even in the area"',
        'All your work comes from word of mouth — Google sends you nothing',
      ],
    },
    answer: {
      heading: 'We put you on the map — literally',
      text: "We take over your Google listing and make it work like a shopfront: right details, real photos, fresh updates, and reviews that keep stacking up. Then we give your website a page for every area you serve, so whether they search from Northside or three suburbs south, you show up. You don't need to understand how Google works. That's our job. Yours is answering the phone.",
    },
    magic: [
      {
        title: 'We make you the easy choice',
        text: "Showing up is half the battle — being picked is the other half. Great photos, honest replies to reviews, up-to-date info. When your listing looks alive and loved, people stop scrolling and start calling.",
      },
      {
        title: 'A page for every area you serve',
        text: "Google matches searches to pages. So we build one for each suburb you work in — genuinely useful, not copy-paste — and 'what you do + where they are' starts finding you instead of the other guy.",
      },
      {
        title: 'Reviews that stack up by themselves',
        text: 'A link, a QR code, a quick follow-up message — we set up a dead-simple routine your team will actually use, so every happy customer leaves a public pat on the back.',
      },
    ],
    bullets: [
      'Your Google listing set up properly and kept fresh',
      'Your business details made right everywhere they appear online',
      'A simple system for collecting five-star reviews',
      'A page on your site for every area you serve',
      'Mentions from local sites and directories people trust',
      'A short monthly note: where you showed up, what it brought in',
    ],
    faqs: [
      {
        q: 'How long until the phone starts ringing?',
        a: 'Most local businesses see movement in 60–90 days. Busy city areas take longer, but the quick fixes — sorting your listing, tidying your details — often lift things within the first month.',
      },
      {
        q: "I don't have a shopfront. Does this still work?",
        a: 'Yes. If you go to your customers — tradies, mobile services, consultants — we set everything up around the areas you cover instead of a street address.',
      },
    ],
  },
  {
    slug: 'seo',
    title: 'Show up when people search for what you do',
    shortTitle: 'Get found on Google',
    icon: 'search-engine-optimization',
    illustration: 'illus-analytics',
    excerpt:
      "Every month, thousands of people ask Google for exactly what you sell. We get your website in front of them — without you paying for every single click.",
    problem: {
      heading: "You're paying for every customer. Forever.",
      text: "Ads work — until you stop feeding them. The moment the budget runs dry, the leads do too. Meanwhile, some competitor sits at the top of Google for free, collecting the customers you're paying for. What you actually want is for your website to bring in work by itself, month after month, whether you spent money that week or not.",
      signals: [
        'Your ad spend keeps creeping up but the leads stay flat',
        "You Google your own services and can't find yourself",
        'A competitor half your size is everywhere you look',
        'An old agency sent you reports you never understood',
      ],
    },
    answer: {
      heading: 'We make Google send you customers for free',
      text: "Google ranks the websites that deserve it: fast, tidy, and genuinely helpful to the person searching. We make yours one of them. First we fix what's quietly holding your site back, then we build pages that answer exactly what your customers are asking. It takes a few months to earn — and then it keeps paying, with no meter running.",
    },
    magic: [
      {
        title: 'Wallet-out searches first',
        text: 'Someone searching "emergency electrician" is ready to pay today. Someone searching "how fuses work" isn\'t. We chase the first kind first, so results show up in your bank account, not just in a chart.',
      },
      {
        title: 'Fix the boat before rowing harder',
        text: "Most websites leak — slow pages, broken bits, confusing menus. We patch the holes first, so everything we build afterwards actually floats.",
      },
      {
        title: 'Reports your accountant could read',
        text: 'One page a month: what we did, what moved, what it earned you. Phone calls and enquiries — not a single confusing graph.',
      },
    ],
    bullets: [
      'A full check-up of your website, and we fix what we find',
      'Research into what your customers actually type into Google',
      'Every page tuned so Google understands what you offer',
      'New pages that answer the questions customers ask',
      'Mentions from websites Google respects',
      'A plain-English monthly report on calls and enquiries',
    ],
    faqs: [
      {
        q: 'How is this different from ads?',
        a: "Ads are renting the top spot — pay, appear, stop paying, disappear. This is owning it: it takes longer to earn, but once you're there, every click is free and the results compound.",
      },
      {
        q: 'Am I locked into a contract?',
        a: 'No lock-in contracts. We earn next month by delivering this one.',
      },
    ],
  },
  {
    slug: 'web-design',
    title: 'A website that wins you work',
    shortTitle: 'Your website',
    icon: 'responsive-design',
    illustration: 'illus-web-design',
    excerpt:
      "You don't need a prettier website. You need one that makes a stranger think \"these are the ones\" — and then makes calling you effortless.",
    problem: {
      heading: "Your website is costing you jobs you never hear about",
      text: "A stranger lands on your site and gives it about eight seconds. If it's slow, dated, or a mess on their phone, they hit back and call the next result — and you never even know it happened. Your website has one job: convince that stranger you're the safe choice, then make contacting you dead easy. At 9pm. On a Tuesday. While you're asleep.",
      signals: [
        "You're embarrassed to put your web address on the van",
        'It looks fine on your computer and broken on every phone',
        'People visit, but nobody calls or books',
        'Changing a phone number means emailing a developer and waiting a week',
      ],
    },
    answer: {
      heading: 'We build you a tireless salesperson',
      text: "We design your site backwards from the moment that matters: the call, the booking, the quote request. Your best work up front, proof you're trustworthy in easy reach, and a big obvious button that's always one thumb-tap away. And it loads in under a second on a phone in a car park — because every second of waiting quietly sends people back to Google.",
    },
    magic: [
      {
        title: 'Fast enough to feel instant',
        text: "This very site is built the same way we'd build yours — it loads before you finish blinking. Fast sites keep visitors, and Google quietly favours them too.",
      },
      {
        title: 'Designed around the phone call',
        text: 'Every page is laid out backwards from the thing you want visitors to do: call, book, get a quote. No mystery menus, no dead ends.',
      },
      {
        title: 'Ready for Google from day one',
        text: "Everything Google wants to see is built in from the first line — so your new site starts climbing the rankings the day it goes live, not after another invoice.",
      },
    ],
    bullets: [
      'A design that looks like your business at its best',
      'Loads in under a second, even on a phone',
      'Works perfectly on every screen size',
      'Built so Google understands and trusts it from day one',
      'Extra pages for campaigns and the areas you serve',
      'We keep it updated — no developer required on your end',
    ],
    faqs: [
      {
        q: 'How long does a website take?',
        a: 'A typical small-business site launches in 3–6 weeks. Single pages for a campaign can go live in days.',
      },
      {
        q: 'Will it really be that fast?',
        a: "Yes. It's the same approach we used for this site — try it on your phone. Speed is the point: faster sites win more customers and rank better.",
      },
    ],
  },
  {
    slug: 'social-media',
    title: 'Look alive, busy and trusted online',
    shortTitle: 'Social media',
    icon: 'social-media-marketing',
    illustration: 'illus-social-media',
    excerpt:
      "Before they call, they check you out. We make sure what they find — your posts, your photos, your replies — says \"busy, trusted, worth it\".",
    problem: {
      heading: 'People are checking you out. What are they finding?',
      text: "Here's what really happens: someone hears your name, opens Facebook or Instagram, and makes a snap judgement. A page that hasn't posted since last year whispers \"probably closed\". What you want is simple — every time someone checks, you look busy, real and recommended. Without giving up your Sunday nights to make posts.",
      signals: [
        'Your last post is from eleven months ago, and it shows',
        'You get messages asking things your page should already answer',
        "Competitors look busier than you — even though they aren't",
        'You know you should post, but never know what',
      ],
    },
    answer: {
      heading: 'We keep your pages alive so you look the part',
      text: "The content already exists — it's the work you did today. We turn finished jobs, happy customers and the questions you answer all day into posts that sound like you, not like an agency wearing your logo. Posted regularly, replied to promptly, seen by locals. You get on with the work; we make sure everyone knows about it.",
    },
    magic: [
      {
        title: 'Your work is the content',
        text: "No stock photos, no inspirational quotes. Real jobs, real customers, real answers — the stuff that makes a local think \"that's who I'll call\".",
      },
      {
        title: 'Local eyeballs only',
        text: 'A thousand followers who could actually hire you beat a hundred thousand strangers. We grow the audience that can walk through your door.',
      },
      {
        title: 'We answer the messages too',
        text: 'A 10pm "how much for..." is a lead. We reply to comments and messages fast, so the job is half-won before your competitor wakes up.',
      },
    ],
    bullets: [
      'A posting plan built around your busy seasons',
      'Posts made for you: words, pictures and short video',
      'Comments and messages answered in your voice',
      'More followers from the areas you actually serve',
      'A boost budget spent only where it earns',
      'A monthly note on what got seen and what got enquiries',
    ],
    faqs: [
      {
        q: 'Which platforms should my business be on?',
        a: "Wherever your customers are — for most local businesses that's Facebook and Instagram. We put the effort where it brings enquiries, not likes from strangers.",
      },
    ],
  },
  {
    slug: 'ppc',
    title: 'Leads this week — at a price you know',
    shortTitle: 'Paid ads',
    icon: 'conversion-optimization',
    illustration: 'illus-ppc',
    excerpt:
      "Need the phone ringing now, not in six months? We run ads that buy you customers — not clicks — at a cost per job you can say out loud.",
    problem: {
      heading: "You need work now. And you've been burned before.",
      text: "Everyone knows someone who poured money into online ads and got nothing but a bill. So the fear is fair. But here's the thing you're actually trying to buy: a simple answer to \"if I put in a dollar, what comes back?\" — and then the confidence to turn that dial up. When ads are run properly, that answer sits in plain sight.",
      signals: [
        "You need leads this month, not 'give it six months'",
        'You tried running ads yourself and fed money into a mystery',
        'An old agency sent reports full of clicks and never mentioned jobs',
        'You have quiet weeks you could fill if the phone would just ring',
      ],
    },
    answer: {
      heading: 'We buy you customers and show you the receipt',
      text: "Before a cent is spent, we set up tracking so every phone call and enquiry is traced back to the exact ad that caused it. Then we put your ads in front of people typing exactly what you sell, send them to a page built to seal the deal, and trim the waste every single week. You'll know what a customer costs — and when you know that, growing is just arithmetic.",
    },
    magic: [
      {
        title: 'Every dollar tracked to a phone call',
        text: "Tracking goes in before the ads do. You'll see which search produced which job — so cutting waste is a decision, not a guess.",
      },
      {
        title: 'A page built to seal the deal',
        text: "We never send paid clicks to your homepage. Each ad gets its own page that answers exactly what was searched — and asks for the job.",
      },
      {
        title: 'Waste-trimming as a weekly habit',
        text: 'Wrong suburbs, wrong searches, wrong time of day — we prune spending every week so your budget piles up behind the searches that book.',
      },
    ],
    bullets: [
      'Ads at the top of Google when locals search for what you do',
      'Research into which searches bring paying customers',
      'Ad words written to earn the click',
      'A dedicated page designed to turn clicks into calls',
      'Weekly pruning so nothing is wasted',
      'A one-minute report: spend in, jobs out',
    ],
    faqs: [
      {
        q: 'How much do I need to spend?',
        a: 'It depends on your market, but most local campaigns start producing leads from about $30–$50 a day in ad spend. We recommend a number after checking what your competitors are doing.',
      },
    ],
  },
  {
    slug: 'content',
    title: "Stay in your customers' heads",
    shortTitle: 'Emails & articles',
    icon: 'seo-copywriting',
    illustration: 'illus-email-marketing',
    excerpt:
      "The cheapest customer is the one who already knows you. We keep you in their inbox — and put your answers in front of the people Googling them at midnight.",
    problem: {
      heading: "Hundreds of past customers. No way to reach them.",
      text: "You've served hundreds of people who already know and trust you — and you have no way to tap them on the shoulder when they need you again. Meanwhile, the same ten questions customers ask you on every job are being typed into Google every night, and someone else's website is answering them. That's twice the missed business, for want of some words.",
      signals: [
        'You have hundreds of past customers and no way to reach them',
        'Your blog has three posts, the newest from 2021',
        'Customers ask the same ten questions on every single job',
        "You know emails 'work', but yours never leave the drafts folder",
      ],
    },
    answer: {
      heading: 'We do the writing. You do the approving.',
      text: "Once a month, we borrow your brain for an hour. Then we turn what you tell us into two things: pages on your website that answer the questions your customers Google at midnight, and short, genuinely useful emails that land in past customers' inboxes right when the season turns. You approve it all from your phone. The words work while you don't.",
    },
    magic: [
      {
        title: 'Your answers become your pages',
        text: 'The questions customers ask you in person are the ones they ask Google at midnight. We turn your answers into pages that get found — and half-sell the job before they call.',
      },
      {
        title: "Emails people don't delete",
        text: 'Short, useful, occasionally funny. Seasonal reminders, honest tips, the odd offer — like a note from a tradesperson they trust, not a corporation.',
      },
      {
        title: 'One hour of your brain, once a month',
        text: 'A quick chat is all we need from you. Research, writing, publishing, sending — that\'s all ours. You approve it from your phone.',
      },
    ],
    bullets: [
      'Website pages written around real customer questions',
      'A steady drumbeat of useful articles, done for you',
      'Emails to past customers that bring them back',
      'Something worth downloading in exchange for an email address',
      'Your best jobs written up as proof you deliver',
      'A monthly note on visits, opens and enquiries',
    ],
    faqs: [
      {
        q: 'Do you write it or do I?',
        a: 'We write it — researched, in your voice, checked by you before anything goes out. Your job is a quick yes from your phone, not homework.',
      },
    ],
  },
];
