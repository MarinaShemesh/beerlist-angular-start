app.controller('beerController', function($scope, $stateParams, beers) {
    $scope.beer = $stateParams.beerParam;
    console.log($stateParams.beerParam);

  if(!$stateParams.beerParam){
    beers.getBeer($stateParams.id) //beers = beerFactory
    .then(function(beer){
      $scope.beer = beer;
    })
  } else {
    $scope.beer = $stateParams.beerParam;
  }
 
});