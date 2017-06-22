export const BETA_SERIES = {
  baseUrl: 'https://api.betaseries.com/',
  apiKey: 'fec5a9ca0aa3',
  apiVersion: '2.4',
  movies : {
    list : 'movies/search',
    show : 'movies/movie',
    postFavorite: 'movies/favorite',
    postToSee: 'movies/movie',
  },
  series : {
    list : 'shows/list',
    postArchive: 'shows/archive',
    postFavorite : 'shows/favorite'
  },

  apiAuth : {
    secretKey: '5eaff09a9d68764b5cbce9b1f01a3faf',
    redirectUrl: 'http://localhost:4200/redirect',
    accessTokenUrl: 'https://api.betaseries.com/oauth/access_token'
  }
};