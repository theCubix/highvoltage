module.exports = {
  siteMetadata: {
    title: 'High Voltage Theme',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: "src/"
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7dnxtb8wlc24`,
        accessToken: `c24c6375302b1e6599660a82804be0536dd936c577512a2f6b80331515f54f96`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
