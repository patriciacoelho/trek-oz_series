/* eslint-disable global-require */
export const GENRES = {
  ACTION_ADVENTURE: 'Action & Adventure',
  KIDS: 'Kids',
  SCI_FI_FANTASY: 'Sci-Fi & Fantasy',
  WAR_POLITICS: 'War & Politics',
  ANIMATION: 'Animation',
  COMEDY: 'Comedy',
  CRIME: 'Crime',
  DOCUMENTARY: 'Documentary',
  DRAMA: 'Drama',
  FAMILY: 'Family',
  MYSTERY: 'Mystery',
  NEWS: 'News',
  REALITY: 'Reality',
  SOAP: 'Soap',
  TALK: 'Talk',
  WESTERN: 'Western',
};

export const GENRES_TRANSLATION = {
  [GENRES.ACTION_ADVENTURE]: 'Ação e Aventura',
  [GENRES.KIDS]: 'Infantil',
  [GENRES.SCI_FI_FANTASY]: 'Ficção Cientifica e Fantasia',
  [GENRES.WAR_POLITICS]: 'Guerra e Política',
};

export const ALL_GENRES = [
  {
    id: 10759,
    name: GENRES.ACTION_ADVENTURE,
  },
  {
    id: 16,
    name: GENRES.ANIMATION,
  },
  {
    id: 35,
    name: GENRES.COMEDY,
  },
  {
    id: 80,
    name: GENRES.CRIME,
  },
  {
    id: 99,
    name: GENRES.DOCUMENTARY,
  },
  {
    id: 18,
    name: GENRES.DRAMA,
  },
  {
    id: 10751,
    name: GENRES.FAMILY,
  },
  {
    id: 10762,
    name: GENRES.KIDS,
  },
  {
    id: 9648,
    name: GENRES.MYSTERY,
  },
  {
    id: 10763,
    name: GENRES.NEWS,
  },
  {
    id: 10764,
    name: GENRES.REALITY,
  },
  {
    id: 10765,
    name: GENRES.SCI_FI_FANTASY,
  },
  {
    id: 10766,
    name: GENRES.SOAP,
  },
  {
    id: 10767,
    name: GENRES.TALK,
  },
  {
    id: 10768,
    name: GENRES.WAR_POLITICS,
  },
  {
    id: 37,
    name: GENRES.WESTERN,
  },
];

export const CAROUSEL_GENRES = [
  {
    name: GENRES.MYSTERY,
    query: {
      with_genres: ALL_GENRES.find((genre) => genre.name === GENRES.MYSTERY).id,
      without_genres: ALL_GENRES.find((genre) => genre.name === GENRES.SCI_FI_FANTASY).id,
    },
    src: require('@/assets/[genero]detetive.png'),
  },
  {
    name: GENRES.SCI_FI_FANTASY,
    query: {},
    src: require('@/assets/[genero]fantasia.png'),
  },
  {
    name: GENRES.FAMILY,
    query: {},
    src: require('@/assets/[genero]familia.png'),
  },
  {
    name: GENRES.ACTION_ADVENTURE,
    query: {},
    src: require('@/assets/[genero]aventura.png'),
  },
  {
    name: GENRES.COMEDY,
    query: {},
    src: require('@/assets/[genero]comedia.png'),
  },
  {
    name: GENRES.DRAMA,
    query: {},
    src: require('@/assets/[genero]drama.png'),
  },
];
