import IVehicle from "./interfaces/IVehicles";

export default class Motorcycle implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando a entrega");
  }

  getCargo(): void {
    console.log("Pegando as encomendas, estamos prontos");
  }
}
