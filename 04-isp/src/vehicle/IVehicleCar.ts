import IVehicle from "./IVehicle";

export default interface IVehicleCar {
  configurationCar(color: string, year: number, engine: number, seats: number): void;
}
