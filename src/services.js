import {
  trakt,
  tmdb,
//   fanart,
} from './api';

// ...................
// *** TRAKT API ***
// ...................
export const getSeriesBySearch = (query) => trakt.get('/search/show', { params: { query } }).then(({ data }) => data);
export const getSerieSummary = (id, extended) => trakt.get(`/shows/${id}`, { params: { extended } }).then(({ data }) => data);
export const getSerieIdsbyTmdbId = (id) => trakt.get(`/search/tmdb/${id}?type=show`).then(({ data }) => data);

// ...................
// *** TMDB API ***
// ...................
export const getSeriePosters = (id) => tmdb.get(`/tv/${id}/images?api_key=${process.env.VUE_APP_TMDB_API_KEY_V3}`).then(({ data }) => data.posters);
export const getSerieDetails = (id) => tmdb.get(`/tv/${id}?api_key=${process.env.VUE_APP_TMDB_API_KEY_V3}&language=pt-BR`).then(({ data }) => data);
export const getSerieCredits = (id) => tmdb.get(`/tv/${id}/credits?api_key=${process.env.VUE_APP_TMDB_API_KEY_V3}&language=pt-BR`).then(({ data }) => data);
export const getSerieSeason = (id, N) => tmdb.get(`/tv/${id}/season/${N}?api_key=${process.env.VUE_APP_TMDB_API_KEY_V3}&language=pt-BR`).then(({ data }) => data);

export const getSeriesDiscovery = (filters) => tmdb.get(`/discover/tv?api_key=${process.env.VUE_APP_TMDB_API_KEY_V3}&language=pt-BR`, { params: filters }).then(({ data }) => data);
export const getMostPopular = () => tmdb.get(`/tv/popular?api_key=${process.env.VUE_APP_TMDB_API_KEY_V3}&language=pt-BR`).then(({ data }) => data);
export const getWeeklyTrending = () => tmdb.get(`/trending/tv/week?api_key=${process.env.VUE_APP_TMDB_API_KEY_V3}&language=pt-BR`).then(({ data }) => data);

export const getGenresList = () => tmdb.get(`/genre/tv/list?api_key=${process.env.VUE_APP_TMDB_API_KEY_V3}`).then(({ data }) => data);

// ...................
// *** FANART API ***
// ...................
// export const getSeriePosterFanart = (id)
// => fanart.get(`/tv/${id}`).then(({ data }) => data.tvposter);
