"use strict";
var d = document,
    wihlist = d.querySelector('.nav_wishlist'),
    wishlistContainer = d.querySelector('.nav_wishlist__container');


wihlist.addEventListener('mouseover', function(e){
    wishlistContainer.classList.add('opened');
});

document.addEventListener('click', function(e){
   var car = e.target;
    console.log(car);
    console.log(wihlist.contains(car));

    if(car === wihlist || wihlist.contains(car)){
        return false;
    }

    wishlistContainer.classList.remove('opened');
});