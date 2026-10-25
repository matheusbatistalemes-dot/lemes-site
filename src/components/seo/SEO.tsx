import React, { useEffect } from 'react';
import { SALON_DATA } from '@/data/salon';

const SEO = () => {
  useEffect(() => {
    // JSON-LD para Google Search
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "HairSalon",
      "name": SALON_DATA.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": SALON_DATA.address,
        "addressLocality": "Cianorte",
        "addressRegion": "PR",
        "addressCountry": "BR"
      },
      "telephone": SALON_DATA.whatsapp,
      "priceRange": "$$",
      "image": "https://lemes-cabeleireiros.vercel.app/og-image.jpg", // Substituir pela URL real da fachada
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": SALON_DATA.googleRating,
        "reviewCount": SALON_DATA.googleReviews
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    // Meta Tags para Social Media (WhatsApp/Instagram)
    const setMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMeta('description', `Lemes Cabeleireiros: ${SALON_DATA.positioning}. Especialistas em cortes e beleza em Cianorte-PR.`);
    setMeta('og:title', SALON_DATA.name);
    setMeta('og:description', SALON_DATA.positioning);
    setMeta('og:type', 'website');
    setMeta('twitter:card', 'summary_large_image');

  }, []);

  return null; // Este componente não renderiza nada visualmente
};

export default SEO;
