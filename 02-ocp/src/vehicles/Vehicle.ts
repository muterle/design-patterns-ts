export default class Vehicle {
  constructor(
    private color: string,
    private year: number,
    private engine: number,
    private seats: number,
    private doors: number
  ) {}

  car(): void {
    console.log(
      `Criando um carro: ${this.color}, ${this.year}, ${this.engine} de potência, com ${this.seats} assentos e ${this.doors} portas`
    );
    this.startVehicle();
  }

  motorcycle(): void {
    console.log(`Criando uma moto: ${this.color}, ${this.year}, ${this.engine} cilindradas`);
    this.startVehicle();
  }

  startVehicle(): void {
    console.log("O veículo está ligando...");
  }

  stopVehicle(): void {
    console.log("O veículo está desligando...");
  }
}
