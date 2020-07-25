import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0B7346',
        accent: '#BF5400',
      },
    },
    options: {
      customProperties: true,
    },
  },
});
