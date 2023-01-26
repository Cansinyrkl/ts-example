interface Point {
  x: number;
  y: number;
}

interface Passenger {
  name: string;
  phone: string;
}

interface Vehicle {
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  constructor(private _locataion?, private _color?: string) {}

  travelTo(point: Point): void {
    console.log(
      `taksi X: ${this._locataion}, Y:${this._locataion} dan X: ${point.x}, Y:${point.y} konumuna gidiyor.`
    );
  }
  get location() {
    return this._locataion;
  }
  set location(value: Point) {
    if (value.x < 0 || value.y < 0) {
      throw new Error("kordinat bilgileri negatif olamaz");
    }
    this._locataion = value;
  }
}

let taxi_1: Taxi = new Taxi({ x: 1, y: 2 });
taxi_1.travelTo({ x: 1, y: 2 });
let currentLocation = taxi_1.location;
taxi_1.location = { x: 2, y: 5 };
