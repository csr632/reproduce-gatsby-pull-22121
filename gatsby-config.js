/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mdx`,
        path: `${__dirname}/src/mdx/`,
      },
    },
    `gatsby-plugin-mdx`,
  ],
}
