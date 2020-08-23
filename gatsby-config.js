module.exports = {
  siteMetadata: {
    title: 'Andria Hibe',
    description: 'Website for my software development work. Hire me!',
    author: 'Andria Hibe',
  },
  plugins: [
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
