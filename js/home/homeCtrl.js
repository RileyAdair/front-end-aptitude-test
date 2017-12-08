app.controller('homeCtrl', function($scope, homeSrvc){
  $scope.imageUrl = 'http://image.tmdb.org/t/p/w780';

  // Get top rated movies in homeSrvc
  homeSrvc.getTopRated()
    .then(function(response) {
      $scope.movies = response.data.results;
    })

  // animate movie-items
  function animate(){
    TweenMax.staggerTo(".movie-item", .23, {opacity:1, scale:1}, 0.2);
  }
  setTimeout(function(){
    animate()
  }, 300);
});
