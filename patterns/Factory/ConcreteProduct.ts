import { Transport } from "./Product";

export class Truck implements Transport {
  deliver(): void {
    console.log('Delivering by truck');
  }
}

export class Ship implements Transport {
  deliver(): void {
    console.log('Delivering by ship');
  }
}