module.exports = {
  siteMetadata: {
    title: 'Andria Hibe',
    description:
      'Senior Software Engineer specializing in scalable web applications. Explore my projects and technical expertise.',
    author: 'Andria Hibe',
    url: 'https://andria-hibe.netlify.app',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`playfair display`, `nunito`, `lato`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
