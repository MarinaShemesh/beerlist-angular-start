app.controller ('mainController', function ($scope, beers){

  $scope.newBeers = beers.newBeers;
  $scope.addBeer = beers.addBeer;
  $scope.remove = beers.remove;
  $scope.rate = beers.rate;  

  $scope.editBeers = function(beer){
   this.beerCopy = angular.copy(beer);
   this.isEditable = true; 
  }

   $scope.updateBeer = function(beer) {
    var thisBeer = this; // (this.isEditable = false) = wrong
    //pass the modified beer in the tempBeer array to our factory
    beers.updateBeer(this.beerCopy)
      .then(function(updatedBeer) {  
        //if all goes OK the server sends back the updated beer
        beer = updatedBeer;
        console.log("this is from the controller" + updatedBeer);
        beers.getBeers();
        
      }, function(err) {
        //if there has been a problem then alert it
        alert(err.data.message);
      })
      .then(function() {
        //finally, success or error, we need to clear the tempBeer so the view updates
        thisBeer.isEditable = false;
      })
  };

   
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
 