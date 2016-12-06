

var products = cart.getProducts(),
    table = $('.cart_info table tbody');

if(products.length) {
    table.find('tr').hide();
}

for(var i=0; i < products.length; i++) {
    var prod = products[i].obj,
        count = products[i].count,
        template = $($('#cart_row_template tbody').html());

    template.data('product', prod);
    template.find('.cart_product img').attr('src', prod.url);
    template.find('.cart_description a').html(prod.name);
    template.find('.cart_price p').html('$'+prod.price);
    template.find('.cart_quantity_input').val(count);
    template.find('.cart_total p').html('$'+cart.getProductSum(prod.name));

    table.append(template);

}

$('#total_price').text('$'+cart.getProductSum());
templateLastRow = $($('#cart_last_row_template tbody').html());
table.append(templateLastRow);


$('.cart_quantity_up').click(function (e) {
    e.preventDefault();

    var input = $(this).siblings('input'),
        data = $(this).closest('tr').data('product');

    input.val(+input.val()+1);
    cart.addProduct(Product.createFromData(data));
    $(this).closest('tr').find('.cart_total_price').html('$'+cart.getProductSum(data.name));
});

$('.cart_quantity_down').click(function (e) {
    e.preventDefault();

    var input = $(this).siblings('input'),
        data = $(this).closest('tr').data('product');

    if(+input.val() > 1) {
        input.val(+input.val() - 1);
        cart.removeProduct(data.name, 1);
        $(this).closest('tr').find('.cart_total_price').html('$'+cart.getProductSum(data.name));
    }
});

$('.cart_quantity_delete').click(function (e) {
    e.preventDefault();

    var data = $(this).closest('tr').data('product');

    cart.removeProduct(data.name);
    $(this).closest('tr').remove();

    if(!cart.getProducts().length) {
        $('.cart_info table tbody tr').show()
    }
});

