/**
 * Topical map for the knowledge hub.
 * Central entity: "getting a local business found by customers".
 * Each cluster is a facet of that entity; articles within a cluster
 * interlink and point at the service page that solves the problem.
 */
export interface Cluster {
  id: string;
  label: string;
  description: string;
  serviceSlug: string;
  icon: string; // filename in src/assets/icons
}

export const CLUSTERS: Cluster[] = [
  {
    id: 'maps',
    label: 'Getting found nearby',
    description: 'How Google Maps decides which businesses locals see — and how to become one of them.',
    serviceSlug: 'local-seo',
    icon: 'places-optimizations',
  },
  {
    id: 'search',
    label: 'Showing up on Google',
    description: 'Why some websites get found and others stay invisible, in plain English.',
    serviceSlug: 'seo',
    icon: 'search-engine-optimization',
  },
  {
    id: 'reviews',
    label: 'Reviews & trust',
    description: 'Reviews are the new word of mouth. How to earn them, use them and handle the bad ones.',
    serviceSlug: 'local-seo',
    icon: 'online-presence',
  },
  {
    id: 'website',
    label: 'Your website',
    description: 'What a small-business website actually needs to turn visitors into phone calls.',
    serviceSlug: 'web-design',
    icon: 'responsive-design',
  },
  {
    id: 'ads',
    label: 'Paid ads',
    description: 'What ads cost, when they make sense, and how to stop them wasting your money.',
    serviceSlug: 'ppc',
    icon: 'conversion-optimization',
  },
  {
    id: 'ai',
    label: 'AI & the new search',
    description: 'Customers now ask ChatGPT and AI assistants for recommendations. How to be the answer.',
    serviceSlug: 'seo',
    icon: 'seo-monitoring',
  },
];
