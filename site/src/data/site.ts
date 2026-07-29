export const SITE = {
  name: 'Fat Yak Media',
  tagline: 'We get local businesses found',
  description:
    'Fat Yak Media gets local businesses found by the customers already searching for them. Google listings, websites, social media and ads — explained in plain English, measured in phone calls.',
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
