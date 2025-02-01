import { Transport } from "./Product";

export interface TransportFactory {
  createTransport(): Transport;
}