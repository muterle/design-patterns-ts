import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Drone coletando imagens");
  }
  getCargo(): void {
    console.log("Drone pronto, iniciando voo");
  }
  checkWind(): void {
    console.log("Verificando vento, 10km");
  }
}
