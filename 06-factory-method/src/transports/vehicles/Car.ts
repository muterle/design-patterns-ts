import IVehicle from "./interfaces/IVehicles";

export default class Car implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando trajeto");
  }

  getCargo(): void {
    console.log("Pegando os passageiros, estamos prontos");
  }
}
