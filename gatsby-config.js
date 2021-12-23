module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: 'gatsby-theme-codebushi',
      options: {
        tailwindConfig: 'tailwind.config.js'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'BitSai Bitcoin Wallet',
        short_name: 'BitSai',
        start_url: '/',
        theme_color: '#282828',
        display: 'standalone',
        icon: 'src/assets/owl-only.svg',
      },
    },
  ]
}
