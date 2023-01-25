interface Point {
  x: number;
  y: number;
}

interface Passenger {
  name: string;
  phone: string;
}

interface Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  color: string;

  constructor(locataion?: Point, color?: string) {
    this.currentLocation = locataion;
    this.color = color;
  }

  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(`taksi X: ${point.x}, Y:${point.y} konumuna gidiyor.`);
  }
}

let taxi_1: Taxi = new Taxi({ x: 1, y: 2 });

taxi_1.travelTo({ x: 1, y: 2 });
//taxi_1.color = "red";

let taxi_2 = new Taxi({ x: 1, y: 2 }, "red");
let taxi_3 = new Taxi();
