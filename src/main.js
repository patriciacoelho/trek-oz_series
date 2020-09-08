import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

import MainWrapper from './components/MainWrapper.vue';

Vue.config.productionTip = false;

Vue.component('main-wrapper', MainWrapper);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
