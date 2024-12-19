import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";
import Vehicle from "../products/Vehicle";

export default interface IBuilder {
  reset(): void;
  getVehicle(): Vehicle;

  addWheel(wheel: Wheel): void;
  setVehicleType(value: VehicleType): void;
  setEngine(engine: Engine): void;
  setSeats(seats: number): void;
  setTransmission(transmission: Transmission): void;
}
