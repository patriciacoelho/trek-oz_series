/* eslint-disable no-unused-vars */
import { getSeriesBySearch } from '@/services';

export default {
  namespaced: true,

  state: {
    lastSearch: {
      query: '',
      results: [],
    },
  },

  getters: {
    totalSearchResults(state, getters) {
      return state.lastSearch.results.length;
    },

    searchFoundAnyResults(state, getters) {
      return state.lastSearch.results.length > 0;
    },
  },

  actions: {
    fetchSearchResults({ commit }, query) {
      return new Promise((resolve, reject) => {
        getSeriesBySearch(query)
          .then((results) => {
            results = results.map((result) => ({
              ...result.show,
              src: '',
              loading: true,
            }));
            commit('setLastSearch', {
              query,
              results,
            });
            resolve();
          });
      });
    },

    clearLastSearch({ commit }) {
      commit('setLastSearchInitialState');
    },
  },

  mutations: {
    setLastSearch(state, lastSearch) {
      state.lastSearch = lastSearch;
    },

    setLastSearchInitialState(state) {
      state.lastSearch = {
        query: '',
        results: [],
      };
    },
  },
};
