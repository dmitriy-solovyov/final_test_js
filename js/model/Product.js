
function Product() {
}

Product.prototype.validate = function () {
    return this.url != undefined && this.name != undefined && this.price != undefined;
};

Product.createEmpty = function () {
    var product = new Product;
    product.price = 100;
    product.name = 'Empty';
    product.url = '';
    return product;
};

Product.createFromData = function (data) {
    var product = new Product;
    product.price = data.price;
    product.name = data.name;
    product.url = data.url;
    return product;
};
