module.exports = {
  siteMetadata: {
    title: `Erudex`,
    titleTemplate: "%s · Make Learning Personal",
    description: `Find all the help you need to learn or teach online`,
    author: `Erudex`,
    language: "en",
    image: `src/images/erudex-logo.jpg`,
    siteUrl: `https://erudex.com`,
    og: {
      siteName: "Erudex - India's Most Teacher-Friendly Ed-tech Platform",
      twitterUsername: '@weareerudex',
    },
  },
  flags: {
    THE_FLAG: false,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 70,
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'tracedSVG',
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fav.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
        purgeOnly: [`src/styles/globals.css`],
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@common': 'src/components/common',
          '@layout': 'src/components/layout',
          '@home': 'src/components/home',
          '@virtualLab': 'src/components/virtualLab',
          '@pyschometricTests': 'src/components/pyschometricTests',
          '@arClasses': 'src/components/ar-classes',
          '@eduaccess': 'src/components/eduaccess',
        },
        extensions: [
          "js",
        ],
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5KKBRTG",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
  ],
}
