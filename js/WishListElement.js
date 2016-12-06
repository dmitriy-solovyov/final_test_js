"use strict";

$(document).ready(function () {

    var el = $(".fa-star").closest("li");
    el.addClass("nav_wishlist");
    el.append('<div class="nav_wishlist__container">');
    $(".nav_wishlist__container").append('<ul class="nav_wishlist__list"></ul>');



    var d = document,
        wihlist = d.querySelector('.nav_wishlist'),
        wishlistContainer = d.querySelector('.nav_wishlist__container');


    wihlist.addEventListener('mouseover', function (e) {
        var products = wishList.getProducts();

        var element = $('.nav_wishlist__list');

        for (var i = 0; i < products.length; i++) {
            var prod = products[i].obj;

            element.append('<li class=nav_wishlist__item">' + prod.name + '<i class="fa fa-times j-remove_wish_item" aria-hidden="true"></i></li>');

        }
        wishlistContainer.classList.add('opened');
    });

    document.addEventListener('click', function (e) {
        var car = e.target;
        console.log(car);
        console.log(wihlist.contains(car));

        if (car === wihlist || wihlist.contains(car)) {
            return false;
        }

        wishlistContainer.classList.remove('opened');
    });

    var removeButton = d.querySelector('.j-remove_wish_item');

    // removeButton.addEventListener('click', function (e) {
    //     console.log("REMOVE");
    //     var name = $(this).parent().text();
    //     wishList.removeProduct(name);
    // });


});

// $(document).ready(function () {
//     $(function () {
//         var products = wishList.getProducts();
//
//         var element = $('.nav_wishlist__list');
//
//         for(var i=0; i < products.length; i++) {
//             var prod = products[i].obj;
//
//             element.append('<li class=nav_wishlist__item">' + prod.name + '<i class="fa fa-times j-remove_wish_litem" aria-hidden="true"></i></li>');
//
//         }
//
//     });
// });