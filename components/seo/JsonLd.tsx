import React from "react";
import { siteConfig } from "@/data/siteConfig";

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    alternateName: "Inline Overseas Education Consultancy",
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.ico`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
      postalCode: siteConfig.address.postalCode,
    },
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.linkedin,
      siteConfig.socials.facebook,
      siteConfig.socials.youtube,
    ],
    award: `${siteConfig.award.title} at ${siteConfig.award.organization} ${siteConfig.award.year}`,
    areaServed: ["Global", "India", "UK", "USA", "Canada", "Australia", "Europe"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Overseas Study Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "University Admissions Counselling",
            description: "Personalized shortlisting and admission guidance for top global universities.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Student Visa Consultation",
            description: "End-to-end visa filing, financial documentation, and mock interview prep.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "International Scholarship Assistance",
            description: "Helping students secure merit and university-based grants and scholarships.",
          },
        },
      ],
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}
