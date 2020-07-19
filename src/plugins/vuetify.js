import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#285AB9',
        secondary: '#2ECC71',
      },
    },
    options: {
      customProperties: true,
    },
  },
});
