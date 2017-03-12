app.service('beers', function($http){
  var newBeers = [];

  var getBeers = function() {
  return $http.get('/beers')
    .then(function(response) {
      angular.copy(response.data, newBeers);//this is the push
      console.log(response);
    }, function(err) {
      console.error(err)
    });
};

  var test = 'this is from the service';

  var addBeer = function(newBeers){//stout is the beerform
  return $http.post ('/beers',newBeers) 
    .then(function(response) {
      getBeers(); //this is the push
      console.log("Beer is added");
    }, function(err) {
      console.error(err)
    });
};
  
  var remove = function(id){
    $http.delete('/beers/' + id)
     .then(function() {
      getBeers()
      console.log("beer is deleted");
     })
    };


var tempObj = {
    newBeers: newBeers,
    test: test,   //remember the second test is the var above
    addBeer:addBeer,
    remove:remove,
    getBeers: getBeers // these are key: value pairs
};

return tempObj;

});
//the service/ factory define the functions

// Hard coded array
  //   {
  //         img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQHnrjPN57ATG1OdT8EK-CCABjrxizna7Hb9MusZcKiR6H1zQMsAw", 
  //         name:"Kentucky Brunch Brand", 
  //         style:"Stout", 
  //         abv: 4.01,
  //         rating: 4
  //         },
        
  //       {
  //         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1FkMYyv-S6adwzarKtitQBc7P_KT6sNzjEEXrGDrxcZNdi7q", 
  //         name:"Very Hazy", 
  //         style: "IPA", 
  //         abv: 4.74,
  //         rating: 2
  //         },

  //       {
  //         img: "https://c1.staticflickr.com/9/8260/8605518012_86816323e0_n.jpg", 
  //         name:"Pale Writer", 
  //         style: "IPA", 
  //         abv: 4.67,
  //         rating: 5
  //         }
        
  // ];