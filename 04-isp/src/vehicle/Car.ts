import IVehicle from "./IVehicle";
import IVehicleCar from "./IVehicleCar";

export default class Car implements IVehicleCar, IVehicle {
  constructor(color: string, year: number, engine: number, seats: number) {
    this.configurationCar(color, year, engine, seats);
  }

  configurationCar(color: string, year: number, engine: number, seats: number): void {
    console.log(
      `Criando um carro: ${color}, ${year}, ${engine} de potência, com ${seats} assentos`
    );
    this.startVehicle();
  }

  startVehicle(): void {
    console.log("O carro está ligando...");
  }
}
