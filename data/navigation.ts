export interface SubMenuItem {
  title: string;
  href: string;
  description: string;
  badge?: string;
  iconName?: string;
}

export interface NavItemType {
  label: string;
  href: string;
  badge?: string;
  hasDropdown?: boolean;
  featured?: {
    title: string;
    description: string;
    ctaText: string;
    href: string;
  };
  children?: SubMenuItem[];
}

export const agencyNavItems: NavItemType[] = [
  {
    label: "Destinations",
    href: "#destinations",
    hasDropdown: true,
    featured: {
      title: "Fall 2025 / 2026 Intakes",
      description: "Applications now open for top UK, USA & Canadian universities with priority scholarships.",
      ctaText: "Explore Deadlines",
      href: "#destinations",
    },
    children: [
      {
        title: "Study in United Kingdom",
        href: "#uk",
        description: "Russell Group, 2-year post-study work visa & no GRE required",
        badge: "Top Choice",
      },
      {
        title: "Study in United States",
        href: "#usa",
        description: "Tier-1 research institutions with 3-year STEM OPT extensions",
        badge: "High ROI",
      },
      {
        title: "Study in Canada",
        href: "#canada",
        description: "World-class co-op degrees with direct PGWP & PR pathways",
      },
      {
        title: "Study in Australia",
        href: "#australia",
        description: "Group of Eight universities with regional migration benefits",
      },
      {
        title: "Study in Ireland & Europe",
        href: "#europe",
        description: "European tech capitals with English-taught programs & Schengen access",
      },
    ],
  },
  {
    label: "Services",
    href: "#services",
    hasDropdown: true,
    featured: {
      title: "100% Free Consultation",
      description: "Book a 30-min strategy call with our certified overseas career mentors.",
      ctaText: "Book Free Slot",
      href: "#enquire",
    },
    children: [
      {
        title: "Profile Assessment & Shortlisting",
        href: "#services",
        description: "AI & expert-driven matching to find your best-fit global universities",
      },
      {
        title: "SOP & Recommendation Mentorship",
        href: "#services",
        description: "Ivy-league standard essays and compelling personal statements",
      },
      {
        title: "Scholarship & Grant Filing",
        href: "#services",
        description: "Maximizing merit waivers up to £15,000 / $25,000 per student",
        badge: "Scholarships",
      },
      {
        title: "Visa Filing & Mock Interviews",
        href: "#services",
        description: "99.4% visa approval record with real officer mock sessions",
        badge: "99.4% Success",
      },
    ],
  },
  {
    label: "Success Stories",
    href: "#success-story",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Insights",
    href: "#blogs",
  },
];
