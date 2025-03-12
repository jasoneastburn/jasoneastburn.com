export const SITE_METADATA = {
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

  socialBanner: 'images/jasoneastburn-avatar.jpg',
  mastodon: '',
  email: 'jasoneastburn@hotmail.com',
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
  goodreadsBookshelfUrl: 'https://www.goodreads.com/review/list/188035399-jason-eastburn',
  goodreadsFeedUrl: 'https://www.goodreads.com/review/list_rss/188035399',
  support: {
    paypal: 'https://paypal.me/jasoneastburn',
    buyMeACoffee: 'https://www.buymeacoffee.com/jasoneastburn',
  },
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.UMAMI_WEBSITE_ID,
      analyticsUrl: 'https://cloud.umami.is/share/ZKZV9Tx13E8Hhy1U/www.jasoneastburn.com',
    },
    googleAnalytics: {
      googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '',
    //   src: '',
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '',
    // },
  },
  newsletter: {
    // Supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus,      beehive
    //provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title',
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
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: 'search.json',
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   appId: 'R2IYF7ETH7',
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}
