import IVehicleMotorcycle from "./IVehicleMotorcycle";

export default class Motorcycle implements IVehicleMotorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configure(color, year, engine);
  }

  configure(color: string, year: number, engine: number): void {
    console.log(`Criando uma moto: ${color}, ${year}, ${engine} cilindradas`);
    this.startVehicle();
  }

  startVehicle(): void {
    console.log("O veículo está ligando...");
  }

  stopVehicle(): void {
    console.log("O veículo está desligando...");
  }
}
