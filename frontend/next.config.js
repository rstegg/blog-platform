module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
    PRODUCTION: true,
    API_PRODUCTION: 'https://blog-server-ov37.onrender.com/api',
    APP_NAME: 'blog-app',
    DOMAIN_PRODUCTION: 'https://blog-client-wusi.onrender.com',
    FB_APP_ID: '685220304879022',
    DISQUS_SHORTNAME: 'blogapp-14',
    GOOGLE_CLIENT_ID: '223989474980-6pp11etlhaklqcgqa59l5iudu3n6navs.apps.googleusercontent.com'
  },
}

