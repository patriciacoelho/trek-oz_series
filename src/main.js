import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import vuetify from './plugins/vuetify';

import NavBar from './components/NavBar.vue';

Vue.config.productionTip = false;

Vue.component('nav-bar', NavBar);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
