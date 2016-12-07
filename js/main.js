/*price range*/

$('#sl2').slider();

var RGBChange = function () {
    $('#RGB').css('background', 'rgb(' + r.getValue() + ',' + g.getValue() + ',' + b.getValue() + ')')
};

/*scroll to top*/

$(document).ready(function () {
    $(function () {
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            scrollDistance: 300, // Distance from top/bottom before showing element (px)
            scrollFrom: 'top', // 'top' or 'bottom'
            scrollSpeed: 300, // Speed back to top (ms)
            easingType: 'linear', // Scroll to top easing (see http://easings.net/)
            animation: 'fade', // Fade, slide, none
            animationSpeed: 200, // Animation in speed (ms)
            scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
            //scrollTarget: false, // Set a custom target element for scrolling to the top
            scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
            scrollTitle: false, // Set a custom <a> title if required.
            scrollImg: false, // Set true to use image
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            zIndex: 2147483647 // Z-Index for the overlay
        });
    });
});

$(document).ready(function () {
    $(function () {
        var elements = $('.fa-plus-square');

        for (var i = 0; i < elements.length; i++) {
            if ($(elements[i]).parent().text().trim() == 'Add to wishlist') {
                $(elements[i].parentElement).addClass("wishlist");
            }
        }

        $('.wishlist').click(function (e) {
            e.preventDefault();

            var data = $(this).parents('.product-image-wrapper').children('.product_data').data(),
                prod = Product.createFromData(data);

            if(wishList.getProducts().length == 0){
                $('.nav_wishlist__item').remove();
            }

            wishList.addProduct(prod);

            if(!isPresent(prod.name)){
                var element = $('.nav_wishlist__list');

                element.append('<li class=nav_wishlist__item>' + prod.name + '<i class="fa fa-times j-remove_wish_item" aria-hidden="true"></i></li>');

                $('.nav_wishlist__list li:last').click(function (e) {
                        var name = $(this).parent().text();
                        wishList.removeProduct(name);
                        $(this).closest('li').remove();
                    });

                // $('.j-remove_wish_item').on("click" , removeItem());
                // $('.j-remove_wish_item').click(function (e) {
                //     var name = $(this).parent().text();
                //     wishList.removeProduct(name);
                //     $(this).closest('li').remove();
                // });
            }

        });
    });
});

// function removeItem() {
//     console.log("THIS: " +  $(this));
//     var name = $(this).parent().text();
//     wishList.removeProduct(name);
//     $(this).closest('li').remove();
// };

var isPresent = function (productName) {
    var elements = $('.nav_wishlist__item');
    for(var i = 0; i < elements.length; i++){
        console.log("PROD NAME: " + productName);
        console.log("ITEM NAME: " + $(elements[i]).text());
        if($(elements[i]).text() == productName){
            return true;
        }
    }

    return false;
}

$('.add-to-cart').click(function (e) {
    e.preventDefault();

    var data = $(this).closest('.product_data').data(),
        prod = Product.createFromData(data);

    cart.addProduct(prod);
});

// $(document).ready(function () {
//     $('.wishlist').click(function (e) {
//         e.preventDefault();
//         console.log("EVENT");
//
//
//         var data = $(this).parents('.product-image-wrapper').children('.product_data').data(),
//             prod = Product.createFromData(data);
//
//         wishList.addProduct(prod);
//     });
// });