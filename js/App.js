
document.addEventListener('update-cart', function (e) {
    $('.cart_inform').html('$'+cart.getProductSum()+'; '+cart.getProductCount())
});

document.addEventListener('update-cart', function (e) {
    $('.total_area li:last span').html('$'+cart.getProductSum())
});