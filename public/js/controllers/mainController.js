app.controller ('mainController', function ($scope, beers){

  $scope.newBeers = beers.newBeers;
  $scope.addBeer = beers.addBeer;
  
  $scope.remove = function(index){
    $scope.newBeers.splice(index, 1);
    };
//assign service data and functions to scope object


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
 });
 