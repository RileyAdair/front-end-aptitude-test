const app = angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/home/homeTemplate.html',
      controller: 'homeCtrl'
    })
    .state('movie', {
      url: '/movie/:id',
      templateUrl: 'js/movie/movieTemplate.html',
      controller: 'movieCtrl'
    })
});
