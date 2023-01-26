import { Product } from "./Product";

export class SimpleDataSource {
  private procuts: Array<Product>;

  constructor() {
    this.procuts = new Array<Product>(
      new Product(1, "Samsung S1", "Telefon", 1000),
      new Product(2, "Samsung S2", "Telefon", 2000),
      new Product(3, "Samsung S3", "Telefon", 3000),
      new Product(4, "Samsung S4", "Telefon", 4000),
      new Product(5, "Samsung S5", "Telefon", 5000)
    );
  }
  getProducts(): Product[] {
    return this.procuts;
  }
}
