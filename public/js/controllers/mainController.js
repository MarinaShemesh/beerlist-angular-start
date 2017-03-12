app.controller ('mainController', function ($scope, beers){

  $scope.newBeers = beers.newBeers;
  $scope.addBeer = beers.addBeer;
  $scope.remove = beers.remove;

  
//the controller assign service data and functions to scope objects


    // $scope.newBeer= [];
//    $scope.addBeer= function(){
    
//     alert("button works");
//     var ale = {

//      img:$scope.img,
//      name:$scope.name,
//      style:$scope.style,
//      abv:$scope.abv
//     };

//     beers.addBeer(newBeer);
//  }
beers.getBeers()
 });
 