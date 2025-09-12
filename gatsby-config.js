module.exports = {
  siteMetadata: {
    title: 'Andria Hibe',
    description: 'Looking to hire a software developer? Check out my work!',
    author: 'Andria Hibe',
    url: 'https://andria-hibe.netlify.app',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`oswald`, `montserrat`, `lato`],
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
