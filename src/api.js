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
