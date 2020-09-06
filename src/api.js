import axios from 'axios';

export const trakt = axios.create({
  baseURL: process.env.VUE_APP_TRAKT_BASE_URL,
  timeout: 30000,
  headers: {
    'trakt-api-version': 2,
    'trakt-api-key': process.env.VUE_APP_TRAKT_CLIENT_ID,
  },
});

export const tmdb = axios.create({
  baseURL: process.env.VUE_APP_TMDB_BASE_URL,
  timeout: 30000,
});

tmdb.interceptors.request.use((config) => {
  const pathArray = config.url.split('/');
  const lastPart = pathArray.pop();

  config.params = {
    ...config.params,
    api_key: process.env.VUE_APP_TMDB_API_KEY_V3,
  };

  if (lastPart !== 'images') {
    config.params.language = 'pt-BR';
  }

  return config;
}, (error) => Promise.reject(error));

export const fanart = axios.create({
  baseURL: process.env.VUE_APP_FANART_BASE_URL,
  timeout: 30000,
  headers: {
    'api-key': process.env.VUE_APP_FANART_API_KEY,
  },
});
