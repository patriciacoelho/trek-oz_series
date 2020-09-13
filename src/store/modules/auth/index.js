/* eslint-disable no-unused-vars */
import { getToken } from '@/services';

function generateAuthorizationUrl() {
  return `${process.env.VUE_APP_TRAKT_AUTHORIZATION_ENDPOINT}?response_type=code&client_id=${process.env.VUE_APP_TRAKT_CLIENT_ID}&redirect_uri=${process.env.VUE_APP_REDIRECT_URI}`;
}

export default {
  namespaced: true,

  state: {
    accessToken: localStorage.getItem('trakt-token') || '',
    loggedInTrakt: null,
  },

  getters: {
    isAuthenticated: (state, getters) => !!state.accessToken,
    isLoggedInTrakt: (state, getters) => state.loggedInTrakt,
  },

  actions: {
    startAuthentication({ commit }, routeToRemember) {
      // Build the authorization URI
      const authorizationUrl = generateAuthorizationUrl();

      sessionStorage.setItem('routeToRemember', routeToRemember.path);

      // Returns url to the authorization server (to redirect to)
      return authorizationUrl;
    },

    async getAccessToken({ state: storeState, commit }, { code, state }) {
      const { data: { access_token: accessToken } } = await getToken({
        code,
        clientId: process.env.VUE_APP_TRAKT_CLIENT_ID,
        clientSecret: process.env.VUE_APP_TRAKT_CLIENT_SECRET,
        redirectUri: process.env.VUE_APP_REDIRECT_URI,
      });

      commit('setToken', accessToken);

      localStorage.setItem('trakt-token', accessToken);
    },

    logout({ commit }) {
      commit('resetAuthentication');
      localStorage.removeItem('trakt-token');

      const logoutUrl = '../logout';

      return logoutUrl;
    },
  },

  mutations: {
    setloggedInTrakt(state, value) {
      state.loggedInTrakt = value;
    },

    setToken(state, accessToken) {
      state.accessToken = accessToken;
    },

    resetAuthentication(state) {
      state.accessToken = '';
      state.loggedInTrakt = null;
    },
  },
};
