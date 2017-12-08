app.controller('movieCtrl', function($scope, $stateParams, movieSrvc){
    $scope.imageUrl = 'http://image.tmdb.org/t/p/w780';

  // Get movie details from movieSrvc
  movieSrvc.getMovieDetails($stateParams.id)
    .then(function(response) {
      console.log(response.data);
      $scope.movie = response.data;
    })

  $scope.tweet = function(title) {
    // Opens new window to tweet about the movie
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('Wanna watch "' + title + '" and chill?'));
  };

});
