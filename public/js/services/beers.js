app.service('beers', function(){
  var newBeers = [
        {
          img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQHnrjPN57ATG1OdT8EK-CCABjrxizna7Hb9MusZcKiR6H1zQMsAw", 
          name:"Kentucky Brunch Brand", 
          style:"Stout", 
          abv: 4.01,
          rating: 4
          },
        
        {
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1FkMYyv-S6adwzarKtitQBc7P_KT6sNzjEEXrGDrxcZNdi7q", 
          name:"Very Hazy", 
          style: "IPA", 
          abv: 4.74,
          rating: 2
          },

        {
          img: "https://c1.staticflickr.com/9/8260/8605518012_86816323e0_n.jpg", 
          name:"Pale Writer", 
          style: "IPA", 
          abv: 4.67,
          rating: 5
          }
        
  ];

  var test = 'this is from the service';

  var addBeer = function(stout){//stout is the beerform
    console.log(stout)
    stout.rating = 0;
    newBeers.push(stout)//pushing stout/beerform into newBeers
    console.log(newBeers);
     }

return {
    newBeers: newBeers,
    test: test, //remember the second test is the var above
    addBeer:addBeer // these are key: value pairs
};
});
//define the functions