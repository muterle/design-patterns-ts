import Transport from "./Transport";
import Car from "./vehicles/Car";
import IVehicle from "./vehicles/interfaces/IVehicles";

export default class CarTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Car();
  }
}
