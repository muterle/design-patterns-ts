export default interface IVehicleMotorcycle {
  configure(color: string, year: number, engine: number): void;
  startVehicle(): void;
  stopVehicle(): void;
}
