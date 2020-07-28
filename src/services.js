import { trakt, tmdb } from './api';

export const getSeriesBySearch = (query) => trakt.get('/search/show', { params: { query } }).then(({ data }) => data);

export const getSerie = (id) => trakt.get(`/search/trakt/${id}?type=show&extended=full`).then(({ data }) => data);

export const getSeriePosters = (id) => tmdb.get(`/tv/${id}/images?api_key=${process.env.VUE_APP_TMDB_API_KEY_V3}`).then(({ data }) => data.posters);
