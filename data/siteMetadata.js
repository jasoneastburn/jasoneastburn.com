/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Jason Eastburn',
  author: 'Jason Eastburn',
  headerTitle: 'Jason Eastburn',
  description: 'Check out the most recent posts and projects from yours truly...',
  language: 'en-us',
  theme: 'system',
  site: 'jasoneastburn.com',
  siteUrl: 'https://www.jasoneastburn.com',
  siteRepo: 'https://github.com/jasoneastburn/jasoneastburn.com',
  siteLogo: '/images/jasoneastburn-avatar.jpg',
  analyticsUrl: 'https://cloud.umami.is/share/ZKZV9Tx13E8Hhy1U/www.jasoneastburn.com',
  socialBanner: '',
  mastodon: '',
  email: 'jasoneastburn@gmail.com',
  github: 'https://github.com/jasoneastburn',
  x: 'https://x.com/jasoneastburn',
  facebook: 'https://facebook.com/jasoneastburn',
  youtube: 'https://youtube.com/channel/UCK9bWbp8I-exu4cD4qFTs8A',
  linkedin: 'https://www.linkedin.com/in/jasoneastburn',
  threads: 'https://www.threads.net/jasoneastburn',
  instagram: 'https://www.instagram.com/jasoneastburn',
  medium: '',
  bluesky: 'https://bsky.app/profile/jasoneastburn.bsky.social',
  locale: 'en-US',
  stickyNav: true,
  support: {
    paypal: 'https://paypal.me/jasoneastburn',
    buyMeACoffee: 'https://www.buymeacoffee.com/jasoneastburn',
  },
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.UMAMI_WEBSITE_ID,
    },
    googleAnalytics: {
      googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    //   If you are hosting your own Plausible.
    //   src: '', // e.g. https://plausible.my-domain.com/js/script.js
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'transparent_dark',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
      inputPosition: 'top',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
