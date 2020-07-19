# Trek-oz Series

Scaffolding for project setup as PWA, with Vuetify, Vue Router, EsLint 

## Project setup
Install dependencies
```
npm install
```

If you not create an Trusted Web App (TWA) from this PWA, you can remove the lines of `vue.config.js`
```
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
```

### Compiles
To start the service on development mode with hot-reload
```
npm run serve
```

To verify if features associated to Service Worker are working
```
npm run serve:prod
```

To compiles and minifies for production only
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### References
* See [Web App Manifest](https://web.dev/add-manifest/).
* See [Vuetify](https://vuetifyjs.com/en/).
* See [Vue CLI Configuration Reference](https://cli.vuejs.org/config/).
