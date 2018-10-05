require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
const devMode = process.env.NODE_ENV !== 'production'
const author = process.env.SITE_AUTHOR || 'Peter Greene'
const wordPressOriginShort = process.env.WORDPRESS_ORIGIN_SHORT
const wordPressOriginLong =
  process.env.WORDPRESS_ORIGIN_LONG ||
  'https://flowmixedmartialarts.wordpress.com/'
const description =
  process.env.SITE_DESCRIPTION || "Cheshire's choice for Mixed Martial Arts"
const name = process.env.SITE_TITLE || 'FLOW Brazilian Jiu Jitsu'
const short_name = process.env.SITE_SHORT_TITLE || 'FLOW BJJ'
const siteUrl = process.env.LONG_SITE_URL || 'http://www.flowmma.org/'

module.exports = {
  siteMetadata: {
    title: name,
    author,
    description,
    siteUrl,
    backgroundImage: './src/assets/images/pexels-photo-185699.jpeg',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-111355699-1',
        // Setting this parameter is optional
        // anonymize: true,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: wordPressOriginShort,
        protocol: 'https',
        hostingWPCOM: true,
        auth: {
          // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
          // then add your clientId, clientSecret, username, and password here
          wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
          wpcom_app_clientId: process.env.WORDPRESS_CLIENT_ID,
          wpcom_user: process.env.WORDPRESS_USER,
          wpcom_pass: process.env.WORDPRESS_PASSWORD,
        },
        // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // It can help you debug specific API Endpoints problems.
        verboseOutput: false,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // Search and Replace Urls across WordPress content.
        searchAndReplaceContentUrls: {
          sourceUrl: wordPressOriginLong,
          replacementUrl: devMode ? 'http://localhost:8000' : siteUrl,
        },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        // Exclude specific routes using glob parameters
        // See: https://github.com/isaacs/minimatch
        // Example:  `["/*/*/comments", "/yoast/**"]` will exclude routes ending in `comments` and
        // all routes that begin with `yoast` from fetch.
        excludedRoutes: ['/*/*/comments', '/yoast/**'],
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-plugin-netlify-cache`,
  ],
}
