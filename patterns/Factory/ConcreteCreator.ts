import { Ship, Truck } from "./ConcreteProduct";
import { TransportFactory } from "./Creator";
import { Transport } from "./Product";

export class TruckFactory implements TransportFactory {
  createTransport(): Transport {
    return new Truck();
  }
}

export class ShipFactory implements TransportFactory {
  createTransport(): Transport {
    return new Ship();
  }
}