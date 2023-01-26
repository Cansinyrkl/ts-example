"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.procuts = new Array(new Product_1.Product(1, "Samsung S1", "Telefon", 1000), new Product_1.Product(2, "Samsung S2", "Telefon", 2000), new Product_1.Product(3, "Samsung S3", "Telefon", 3000), new Product_1.Product(4, "Samsung S4", "Telefon", 4000), new Product_1.Product(5, "Samsung S5", "Telefon", 5000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.procuts;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
