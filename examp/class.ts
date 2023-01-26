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
  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(`taksi X: ${point.x} Y:${point.y} konumuna gidiyor.`);
  }
}

class Bus implements Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(`otobüs X: ${point.x} Y:${point.y} konumuna gidiyor.`);
  }
}