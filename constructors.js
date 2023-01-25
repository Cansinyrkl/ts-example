var Taxi = /** @class */ (function () {
    function Taxi(locataion) {
        this.currentLocation = locataion;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: ".concat(point.x, ", Y:").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 1, y: 2 });
taxi_1.travelTo({ x: 1, y: 2 });
console.log(taxi_1.currentLocation);
