import IVehicleMotorcycle from "./IVehicleMotorcycle";

export default class Motorcycle implements IVehicleMotorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configurationMotorcycle(color, year, engine);
  }

  configurationMotorcycle(color: string, year: number, engine: number): void {
    console.log(`Criando uma moto: ${color}, ${year}, ${engine} cilindradas`);
    this.startVehicle();
  }

  startVehicle(): void {
    console.log("A motocicleta está ligando...");
  }
}
