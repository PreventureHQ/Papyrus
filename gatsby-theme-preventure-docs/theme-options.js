const navConfig = {
  "Core Platform": {
    category: "Core",
    url: "/",
    description:
      "Learn about each part of the Preventure.Live platform and how they all work together.",
    omitLandingPage: true,
  },
  "Web Client (ReactJS)": {
    category: "Clients",
    shortName: "Concourse",
    url: "/concourse",
    description: "Preventure.Live's comprehensive reporting dashboard",
  },
  "Mobile Client (Flutter)": {
    category: "Clients",
    shortName: "Homestead",
    url: "/homestead",
    description: "Cross platform client mobile app for Preventure.Live",
  },
  "Preventure API server (.NET)": {
    category: "Backend",
    url: "/mainboard",
    description:
      "Configure a production-ready GraphQL server to fetch and combine data from multiple sources.",
  },
  "Event Sourcing": {
    category: "Integrations",
    url: "/event-sourcing",
    description: "",
  },
  Webhooks: {
    category: "Integrations",
    url: "/webhooks",
    description: "",
  },
  "Third party integrations": {
    category: "Integrations",
    url: "/third-party",
    description: "Third party platform integrations maintained by Preventure",
  },
  Hardware: {
    // category: "Hardware",
    url: "/hardware",
    omitLandingPage: true,
    description: "",
  },
};

const footerNavConfig = {
  "Code Repositories": {
    href: "https://gitlab.com/preventure.live",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  "Docs Meta": {
    href: "https://docs.preventure.live/community/",
  },
};

module.exports = {
  siteName: "Preventure Docs",
  pageTitle: "Preventure Tech Docs",
  menuTitle: "Preventure.Live",
  // gaTrackingId: "UA-74643563-13",
  // algoliaApiKey: "768e823959d35bbd51e4b2439be13fb7",
  // algoliaIndexName: "apollodata",
  baseUrl: "https://docs.preventure.live",
  // twitterHandle: "apollographql",
  // spectrumHandle: "apollo",
  // youtubeUrl: "https://www.youtube.com/channel/UC0pEW_GOrMJ23l8QcrGdKSw",
  logoLink: "https://docs.preventure.live/",
  // baseDir: "docs",
  contentDir: "source",
  navConfig,
  footerNavConfig,
  // ffWidgetId: "3131c43c-bfb5-44e6-9a72-b4094f7ec028",
};
