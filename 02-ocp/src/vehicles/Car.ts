import IVehicleCar from "./IVehicleCar";

export default class Car implements IVehicleCar {
  constructor(color: string, year: number, engine: number, seats: number, doors: number) {
    this.configure(color, year, engine, seats, doors);
  }

  configure(color: string, year: number, engine: number, seats: number, doors: number): void {
    console.log(
      `Criando um carro: ${color}, ${year}, ${engine} de potência, com ${seats} assentos e ${doors} portas`
    );
    this.startVehicle();
  }

  startVehicle(): void {
    console.log("O veículo está ligando...");
  }

  stopVehicle(): void {
    console.log("O veículo está desligando...");
  }
}
