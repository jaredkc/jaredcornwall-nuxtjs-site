const jcTitle = 'Jared Cornwall - Full Stack Designer';
const jcDescription =
  'Formally trained graphic designer specializing in design and development for marketing and e-commerce websites.';

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: jcTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: jcDescription
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: jcTitle
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: jcDescription
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://jaredcornwall.com/img/ogimage-portfolio.jpg'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://jaredcornwall.com'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Lato:300,400,900&display=swap'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#24B168' },

  /*
  ** Global CSS
  */
  css: ['@/assets/scss/main.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-862015-5'
      }
    ]
  ],

  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/style-resources'],

  styleResources: {
    scss: ['assets/scss/_variables.scss']
  },

  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
