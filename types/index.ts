export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  children?: { label: string; href: string; description?: string }[];
}

export interface ShowcaseCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  tag?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    region: string;
    country: string;
    postalCode: string;
  };
  socials: {
    whatsapp: string;
    instagram: string;
    linkedin: string;
    facebook: string;
    youtube: string;
  };
  award: {
    title: string;
    organization: string;
    year: string;
    badgePrefix: string;
  };
  announcement: {
    text: string;
    linkText?: string;
    href?: string;
  };
}
