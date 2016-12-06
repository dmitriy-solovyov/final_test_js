/**
 * Created by Dima on 07/12/16.
 */
document.addEventListener('update-cart', function (e) {
    $('#total_price').html('$'+cart.getProductSum())
});