var Taxi = /** @class */ (function () {
    function Taxi(locataion, color) {
        this.locataion = locataion;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: ".concat(this.locataion, ", Y:").concat(this.locataion, " dan X: ").concat(point.x, ", Y:").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 1, y: 2 });
taxi_1.travelTo({ x: 1, y: 2 });
//taxi_1.color = "red";
var taxi_2 = new Taxi({ x: 1, y: 2 }, "red");
var taxi_3 = new Taxi();
