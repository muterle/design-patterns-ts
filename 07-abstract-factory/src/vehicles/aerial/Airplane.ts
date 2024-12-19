import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Iniciando a decolagem");
  }
  getCargo(): void {
    console.log("Pegamos os passageiros. Podemos decolar!");
  }
  checkWind(): void {
    console.log("Verificando a velocidade do vento, 30KM");
  }
}
