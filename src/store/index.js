/* eslint-disable no-unused-vars */
import Vuex from 'vuex';
import Vue from 'vue';

import search from './modules/search';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    search,
    auth,
  },
  state: {},
  getters: {},
  actions: {},
  mutations: {},
});
