var app = angular.module('beerList', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      controller: 'mainController',
      templateUrl: '/templates/home.html'
    })
    .state('beer', {
      url: '/beers/:id',
      templateUrl: '/templates/beer.html',
    });

  $urlRouterProvider.otherwise('/home');
}]);
