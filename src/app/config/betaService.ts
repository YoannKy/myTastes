export const BETA_SERIES = {
  baseUrl: 'https://api.betaseries.com/',
  apiKey: 'fec5a9ca0aa3',
  apiVersion: '2.4',
  movies : {
    list : 'movies/search',
    show : 'movies/movie',
    postFavorite: 'movies/favorite',
    postToSee: 'movies/movie',
    favorites : 'movies/favorites'
  },
  series : {
    list : 'shows/list',
    show : 'shows/display',
    postShow: 'shows/show',
    postFavorite : 'shows/favorite',
    favorites : 'shows/favorites'
  },

  apiAuth : {
    secretKey: '5eaff09a9d68764b5cbce9b1f01a3faf',
    redirectUrl: 'http://localhost:4200/redirect',
    accessTokenUrl: 'https://api.betaseries.com/oauth/access_token'
  }
};
