import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando o passeio!!!");
  }
  getCargo(): void {
    console.log("Patinete pronto");
  }
}
