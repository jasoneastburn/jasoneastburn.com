/** @type {import("pliny/config").PlinyConfig } */
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
  analyticsUrl: 'https://cloud.umami.is/share/ZKZV9Tx13E8Hhy1U/www.jasoneastburn.com',
  socialBanner: 'images/jasoneastburn-avatar.jpg',
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
  goodreadsBookshelfUrl: 'https://www.goodreads.com/review/list/188035399-jason-eastburn',
  goodreadsFeedUrl: 'https://www.goodreads.com/review/list_rss/188035399',
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

// export const SITE_METADATA = {
//   title: `Leo's dev blog – stories, insights, and ideas`,
//   author: 'Leo Huynh',
//   headerTitle: `Leo's dev blog`,
//   description:
//     'A personal space on the cloud where I document my programming journey, sharing lessons, insights, and resources for fellow developers.',
//   language: 'en-us',
//   theme: 'system', // system, dark or light
//   siteUrl: 'https://www.leohuynh.dev',
//   siteRepo: 'https://github.com/hta218/leohuynh.dev',
//   siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.jpg`,
//   socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.jpeg`,
//   email: 'contact@leohuynh.dev',
//   github: 'https://github.com/hta218',
//   x: 'https://x.com/hta218_',
//   facebook: 'https://facebook.com/hta218',
//   youtube: 'https://www.youtube.com/@hta218_',
//   linkedin: 'https://www.linkedin.com/in/hta218',
//   threads: 'https://www.threads.net/hta218_',
//   instagram: 'https://www.instagram.com/hta218_',
//   locale: 'en-US',
//   stickyNav: true,
//   goodreadsBookshelfUrl: 'https://www.goodreads.com/review/list/179720035-leo-huynh',
//   goodreadsFeedUrl: 'https://www.goodreads.com/review/list_rss/179720035',
//   imdbRatingsList: 'https://www.imdb.com/user/ur154483197/ratings/?view=grid',
//   analytics: {
//     umamiAnalytics: {
//       websiteId: process.env.NEXT_UMAMI_ID,
//       shareUrl: 'https://analytics.leohuynh.dev/share/c9ErglxqzY5CQJ8g/leohuynh.dev',
//     },
//   },
//   newsletter: {
//     // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
//     // Please add your .env file and modify it according to your selection
//     provider: 'buttondown',
//   },
//   comments: {
//     giscusConfigs: {
//       repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
//       repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
//       category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
//       categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
//       mapping: 'title', // supported options: pathname, url, title
//       reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
//       metadata: '0',
//       theme: 'light',
//       darkTheme: 'transparent_dark',
//       themeURL: '',
//       lang: 'en',
//     },
//   },
//   search: {
//     kbarConfigs: {
//       // path to load documents to search
//       searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
//     },
//   },
//   support: {
//     buyMeACoffee: 'https://www.buymeacoffee.com/leohuynh.dev',
//     paypal: 'https://paypal.me/hta218?country.x=VN&locale.x=en_US',
//     kofi: 'https://ko-fi.com/hta218',
//   },
// }
