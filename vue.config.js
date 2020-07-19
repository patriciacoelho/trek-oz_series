const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  // Config PWA's manifest.json and Service Worker
  pwa: {
    name: 'Trek-oz Series',
    themeColor: '#0B7346',
    msTileColor: '#2ECC71',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/service-worker.js',
    },
    manifestOptions: {
      short_name: 'Trek-oz Series',
      description: 'Boilerplate de um PWA com o Vuetify',
      orientation: 'portrait',
      display: 'standalone',
      scope: '/',
      background_color: '#F1F5FB',
    },
  },
  // Config to copy .well-known with the TWA fingerprint in compile process
  configureWebpack: {
    plugins: [
      new CopyPlugin([
        {
          from: '.well-known',
          to: '.well-known/',
        },
      ]),
    ],
  },
};
