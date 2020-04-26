require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'Salvatorica',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'ZWZjY2UyNGQtYmExZi00OGEzLWExN2QtODU4OGMxYTZlYzI0NjM3MjM0ODYwMjMzNzA0NzEx',
        autopop: true
      }
    },
  ],
}
