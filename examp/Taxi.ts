import { Vehicle } from "./Vehicle";
import { Point } from "./Point";

export class Taxi implements Vehicle {
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
