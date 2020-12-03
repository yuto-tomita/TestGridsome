module.exports = {
  siteName: 'Personal Blog',
  siteDescription: 'simple PersonalBlog designed width Gridsome',
  templates: {
    Post: '/blog/:path'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/**/*.md',
      }
    },
    {
      use: 'gridsome-plugin-typescript'
    },
    {
      use: 'gridsome-plugin-purgecss',
      // default options, the following will be included if you don't provide anything
      options: {
        content: [
          './src/**/*.vue',
          './src/**/*.js',
          './src/**/*.jsx',
          './src/**/*.md',
          './node_modules/vuetify/dist/vuetify.js',
          'node_modules/prismjs/**/*.js'
        ],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],

        // 以下のWhiteList の設定をしなければ、Vuetify のCSS が適用されなくなるので特に注意 !

        whitelist: ['v-application', 'v-application--wrap','layout','row','col'],
        whitelistPatterns: [
          /^v-((?!application).)*$/,
          /^theme--*/,
          /.*-transition/,
          /^justify-*/,
          /^p*-[0-9]/,
          /^m*-[0-9]/,
          /^text--*/,
          /--text$/,
          /^row-*/,
          /^col-*/,   
        ],
        whitelistPatternsChildren: [/^v-((?!application).)*$/, /^theme--*/]
      }
    },
  ],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
}
