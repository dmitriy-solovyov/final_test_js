(function () {

    "use strict"

    var Cart = function () {
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

            localStorage.setItem('cart', JSON.stringify(products));

            document.dispatchEvent(new Event('update-cart'));
        };

        this.removeProduct = function (productName, count) {

            var item = getProductByName(productName);

            if(count){
                item.count -= count;
            } else {
                products.splice(products.indexOf(item), 1);
            }

            localStorage.setItem('cart', JSON.stringify(products));

            document.dispatchEvent(new Event('update-cart'));
        };

        this.getProductPrice = function (productName) {
            var item = getProductByName(productName),
                discount = getDiscount(item) / item.count;

            return item.obj.price - discount;
        };

        this.getProductSum = function (productName) {
            if(productName) {
                var item = getProductByName(productName);
                return this.getProductPrice(productName) * item.count;
            } else {
                var fillSum = 0;

                for(var i = 0; i < products.length; i++) {
                    fillSum += this.getProductPrice(products[i].obj.name) * products[i].count;
                }

                return fillSum;
            }
        };

        this.getProductCount = function (productName) {
            if(productName) {
                var item = getProductByName(productName);
                return item.count;
            } else {
                var fillCount = 0;

                for(var i = 0; i < products.length; i++) {
                    fillCount += products[i].count;
                }

                return fillCount;
            }
        };

        this.getProductDiscount = function (productName) {
            if(productName) {
                // возвращаем скидку по одному товару
                var item = getProductByName(productName);

                return getDiscount(item);
            } else {
                //возвращаем скидку по всей корзине

                var fullDiscount = 0;

                for(var i = 0; i < products.length; i++) {
                    fullDiscount += getDiscount(products[i]);
                }

                return fullDiscount;
            }
        };

        function getDiscount(item) {
            var count = item.count;

            if(count > 5) {
                return item.obj.price * 10 / 100 * count;
            } else if(count > 3) {
                return item.obj.price * 5 / 100 * count;
            } else {
                return 0;
            }
        }

        function getProductByName(productName) {
            for(var i = 0; i < products.length; i++) {
                if(products[i].obj.name == productName) {
                    return products[i];
                }
            }
        }

        +function(){
            var cart = JSON.parse(localStorage.getItem('cart'));
            if(cart) {
                products = cart;
            }
        }();
    };

    window.cart = new Cart;
    setTimeout(document.dispatchEvent(new Event('update-cart')), 0);
})();



