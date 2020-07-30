# Trek-oz Series

Project for track watched series and discovery new ones

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

So far, I had use two API in this project. [Trakt API](https://trakt.docs.apiary.io/) for the backend requests, and [The Movie Database API](https://developers.themoviedb.org/3) for the images. To works, you need to get API credentials and create an `.env` file based on the `.env.example`.
```
VUE_APP_TRAKT_BASE_URL=https://api.trakt.tv

VUE_APP_TRAKT_CLIENT_ID=
VUE_APP_TRAKT_CLIENT_SECRET=

VUE_APP_TMDB_BASE_URL=https://api.themoviedb.org/3
VUE_APP_TMDB_API_KEY_V3=
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
* See [Trakt API](https://trakt.docs.apiary.io/).
* See [The Movie Database API](https://developers.themoviedb.org/3).
* See [Web App Manifest](https://web.dev/add-manifest/).
* See [Vuetify](https://vuetifyjs.com/en/).
* See [Vue CLI Configuration Reference](https://cli.vuejs.org/config/).
