import IVehicle from "./interfaces/IVehicles";

export default class Bike implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando a entrega");
  }

  getCargo(): void {
    console.log("Pegando as comida, estamos prontos");
  }
}
