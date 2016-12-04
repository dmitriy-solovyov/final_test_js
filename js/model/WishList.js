(function () {

    "use strict"

    var WishList = function () {
        var products = [];

        this.getProducts = function () {
            return products;
        };

        this.addProduct = function (product, count) {
            if(!(product instanceof Product) || !product.validate()) {
                console.error('Wrong product');
            }

            count = count || 1;

            var item = getProductByName(product.name);

            if(item){
                item.count += count;
            } else {
                products.push({obj: product, count: count});
            }

            localStorage.setItem('wishList', JSON.stringify(products));

            document.dispatchEvent(new Event('update-wishList'));
        };

        this.removeProduct = function (productName, count) {

            var item = getProductByName(productName);

            if(count){
                item.count -= count;
            } else {
                products.splice(products.indexOf(item), 1);
            }

            localStorage.setItem('wishList', JSON.stringify(products));

            document.dispatchEvent(new Event('update-wishList'));
        };

        function getProductByName(productName) {
            for(var i = 0; i < products.length; i++) {
                if(products[i].obj.name == productName) {
                    return products[i];
                }
            }
        }

        +function(){
            var wishList = JSON.parse(localStorage.getItem('wishList'));
            if(wishList) {
                products = wishList;
            }
        }();
    };

    window.wishList = new WishList;
    setTimeout(document.dispatchEvent(new Event('update-wishList')), 0);
})();



