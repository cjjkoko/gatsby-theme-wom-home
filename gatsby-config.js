module.exports =  {
    siteMetadata: {
      title: `Gatsby Default Starter`,
      description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
      author: `@gatsbyjs`
    },
    plugins: [
      `gatsby-plugin-sass`,
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`
        }
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-theme-wom-contentful`,
        options: {
          spaceId: `1q72o6qjws1u`,
          accessToken: `SP8OX5ivftubPDEzrXHUUQtaelbsfFNyI86mr6XArC0`
        }
      },
      {
        resolve: `gatsby-plugin-postcss`
      },
      `gatsby-theme-WOM-core`,
      `gatsby-theme-core`
    ]
};
