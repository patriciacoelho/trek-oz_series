import {
  trakt,
  tmdb,
//   fanart,
} from './api';

// ...................
// *** TRAKT API ***
// ...................
export const getToken = ({
  code,
  clientId,
  clientSecret,
  redirectUri,
}) => trakt.post('/oauth/token', {
  code,
  grant_type: 'authorization_code',
  client_id: clientId,
  client_secret: clientSecret,
  redirect_uri: redirectUri,
});

// Auth Required Routes
export const getRecommendations = () => trakt.get('/recommendations/shows').then(({ data }) => data);

// Basic Routes
export const getSeriesBySearch = (query) => trakt.get('/search/show', { params: { query } }).then(({ data }) => data);
export const getSerieSummary = (id, extended) => trakt.get(`/shows/${id}`, { params: { extended } }).then(({ data }) => data);
export const getSerieIdsbyTmdbId = (id) => trakt.get(`/search/tmdb/${id}?type=show`).then(({ data }) => data);

// ...................
// *** TMDB API ***
// ...................
export const getSeriePosters = (id) => tmdb.get(`/tv/${id}/images`).then(({ data }) => data.posters);
export const getSerieDetails = (id) => tmdb.get(`/tv/${id}`).then(({ data }) => data);
export const getSerieCredits = (id) => tmdb.get(`/tv/${id}/credits`).then(({ data }) => data);
export const getSerieSeason = (id, N) => tmdb.get(`/tv/${id}/season/${N}`).then(({ data }) => data);

export const getSeriesDiscovery = (filters) => tmdb.get('/discover/tv', { params: filters }).then(({ data }) => data);
export const getMostPopular = () => tmdb.get('/tv/popular').then(({ data }) => data);
export const getWeeklyTrending = () => tmdb.get('/trending/tv/week').then(({ data }) => data);
export const getAiringToday = () => tmdb.get('/tv/airing_today').then(({ data }) => data);
export const getOnTheAir = () => tmdb.get('/tv/on_the_air').then(({ data }) => data);

export const getGenresList = () => tmdb.get('/genre/tv/list').then(({ data }) => data);

// ...................
// *** FANART API ***
// ...................
// export const getSeriePosterFanart = (id)
// => fanart.get(`/tv/${id}`).then(({ data }) => data.tvposter);
