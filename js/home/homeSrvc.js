app.service('homeSrvc', function($http){
  const apiUrl = 'https://api.themoviedb.org/3/';
  const apiKey = '?api_key=eeb7eb8f87b73555b2dd8aa6846f18aa';

  // Get top rated films from The Movie Database API
  this.getTopRated = function() {
    return $http
      .get(apiUrl + 'movie/top_rated' + apiKey)
  }
});
