// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'DesignGouv',
  plugins: [
    {
      use: 'gridsome-plugin-matomo',
      options: {
        host: '//stats.data.gouv.fr',
        siteId: 105
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.STRAPI_API,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['jobs'],
      }
    }
  ],
  templates: {
    StrapiJobs: '/recrutement/:title',
  },
}
