export const siteConfig = {
  company: {
    name: "GC MULTISERVICES",
    tagline: "Entretien paysager et nettoyage de vitres professionnel",
    description: "GC MULTISERVICES, votre spécialiste en entretien paysager et nettoyage de vitres dans les Hauts-de-France. Avec 15 ans d'expérience et plus de 220 projets réalisés, nous offrons des services de qualité pour l'embellissement et l'entretien de vos espaces verts et surfaces vitrées."
  },
  contact: {
    phoneDisplay: "06 84 54 28 15",
    phoneE164: "+33684542815",
    email: "Nous contacter via formulaire"
  },
  location: {
    city: "Cerisy-Buleux",
    region: "Hauts-de-France",
    radiusKm: 30,
    coords: {
      lat: 49.9769867,
      lng: 1.7395303
    },
    villes: [
      "Cerisy-Buleux",
      "Aumale",
      "Blangy-sur-Bresle",
      "Hornoy-le-Bourg",
      "Poix-de-Picardie",
      "Formerie",
      "Grandvilliers",
      "Foucarmont",
      "Marseille-en-Beauvaisis",
      "Argueil",
      "Saint-Germer-de-Fly",
      "Gournay-en-Bray"
    ],
    realisationsVilles: [
      "Cerisy-Buleux",
      "Aumale",
      "Blangy-sur-Bresle",
      "Hornoy-le-Bourg",
      "Poix-de-Picardie",
      "Formerie"
    ],
    temoignagesVilles: [
      "Cerisy-Buleux",
      "Aumale",
      "Blangy-sur-Bresle"
    ]
  },
  stats: {
    projectsCount: "220+",
    yearsExperience: "15 ans"
  },
  googleReviews: {
    rating: "4.9",
    count: 32,
    searchQuery: "GC+MULTISERVICES+entretien+paysager+Cerisy-Buleux+avis"
  },
  seo: {
    titleTemplate: "%s | GC MULTISERVICES - Entretien Paysager Hauts-de-France",
    defaultTitle: "GC MULTISERVICES - Entretien Paysager et Nettoyage de Vitres | Cerisy-Buleux",
    metaDescription: "GC MULTISERVICES : spécialiste en entretien paysager et nettoyage de vitres à Cerisy-Buleux et dans les Hauts-de-France. 15 ans d'expérience, 220+ projets réalisés. Note Google 4.9/5. Devis gratuit.",
    url: "https://gc-multiservices-paysagiste.fr"
  }
};

export const googleReviewsSearchUrl = () => `https://www.google.com/search?q=${siteConfig.googleReviews.searchQuery}`;

export type SiteConfig = typeof siteConfig;