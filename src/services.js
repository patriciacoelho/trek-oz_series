import {
  trakt,
  tmdb,
//   fanart,
} from './api';

// ...................
// *** TRAKT API ***
// ...................
export const getSeriesBySearch = (query) => trakt.get('/search/show', { params: { query } }).then(({ data }) => data);
export const getSerieSummary = (id) => trakt.get(`/shows/${id}?extended=full`).then(({ data }) => data);

// ...................
// *** TMDB API ***
// ...................
export const getSeriePosters = (id) => tmdb.get(`/tv/${id}/images?api_key=${process.env.VUE_APP_TMDB_API_KEY_V3}`).then(({ data }) => data.posters);
export const getSerieDetails = (id) => tmdb.get(`/tv/${id}?api_key=${process.env.VUE_APP_TMDB_API_KEY_V3}&language=pt-BR`).then(({ data }) => data);
export const getSerieCredits = (id) => tmdb.get(`/tv/${id}/credits?api_key=${process.env.VUE_APP_TMDB_API_KEY_V3}&language=pt-BR`).then(({ data }) => data);

// ...................
// *** FANART API ***
// ...................
// export const getSeriePosterFanart = (id)
// => fanart.get(`/tv/${id}`).then(({ data }) => data.tvposter);
