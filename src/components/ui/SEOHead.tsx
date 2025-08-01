import React from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  canonical?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Saray Estetic - Premium Aesthetic Clinic in Istanbul",
  description = "Leading aesthetic clinic in Istanbul offering hair transplant, dental treatments, nose surgery, and cosmetic procedures with international standards.",
  keywords = "hair transplant, dental implants, rhinoplasty, cosmetic surgery, aesthetic clinic, Istanbul, Turkey",
  image = "https://sarayestetic.com/images/og-image.jpg",
  url = "https://sarayestetic.com",
  type = "website",
  author = "Saray Estetic",
  publishedTime,
  modifiedTime,
  noIndex = false,
  canonical,
}) => {
  const fullTitle = title.includes("Saray Estetic")
    ? title
    : `${title} | Saray Estetic`;
  const currentUrl = canonical || url;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Saray Estetic",
    description: description,
    url: url,
    logo: "https://sarayestetic.com/images/logo.png",
    image: image,
    telephone: "+90 212 555 0123",
    email: "info@sarayestetic.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nisantasi District, Tesvikiye Neighborhood",
      addressLocality: "Istanbul",
      addressRegion: "Istanbul",
      postalCode: "34367",
      addressCountry: "Turkey",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "41.0082",
      longitude: "28.9784",
    },
    openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
    medicalSpecialty: [
      "Cosmetic Surgery",
      "Hair Transplant",
      "Dental Surgery",
      "Rhinoplasty",
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1250",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Medical Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Hair Transplant",
            description: "Advanced hair transplantation techniques",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Dental Treatments",
            description: "Comprehensive dental and cosmetic dentistry",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Cosmetic Surgery",
            description: "Professional cosmetic and plastic surgery procedures",
          },
        },
      ],
    },
  };

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {!noIndex && <meta name="robots" content="index, follow" />}

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Saray Estetic" />
      <meta property="og:locale" content="en_US" />

      {/* Article specific meta tags */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@sarayestetic" />
      <meta name="twitter:creator" content="@sarayestetic" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#A52C67" />
      <meta name="msapplication-TileColor" content="#A52C67" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://images.unsplash.com" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Additional structured data for breadcrumbs if on inner pages */}
      {currentUrl !== url && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: url,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: title.replace(" | Saray Estetic", ""),
                item: currentUrl,
              },
            ],
          })}
        </script>
      )}
    </>
  );
};

export default SEOHead;
