export const SITE = {
  name: 'Fat Yak Media',
  tagline: 'Local SEO & Digital Marketing Agency',
  description:
    'Fat Yak Media helps local businesses dominate search. Local SEO, Google Business Profile optimisation, web design, social media and PPC that bring customers through your door.',
  url: 'https://fat-yak-media.pages.dev',
  email: 'hello@fatyakmedia.com',
  areaServed: 'Australia',
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];
