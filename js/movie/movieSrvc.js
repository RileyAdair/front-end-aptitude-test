app.service('movieSrvc', function($http){
  const apiUrl = 'https://api.themoviedb.org/3/';
  const apiKey = '?api_key=eeb7eb8f87b73555b2dd8aa6846f18aa';

  // Get movie details from The Movie Database API
  this.getMovieDetails = function(id) {
    return $http
      .get(apiUrl + 'movie/' + id + apiKey + '&append_to_response=reviews,videos')
  }
});
