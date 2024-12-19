import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Helicóptero decolou");
  }
  getCargo(): void {
    console.log("Passageiros a bordo, iniciando voo");
  }
  checkWind(): void {
    console.log("Verificando vento, tudo está bom, 20km");
  }
}
