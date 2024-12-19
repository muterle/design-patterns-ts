import IPaymentInstrument from "./IPaymentInstrument";

export default class NubankRewards implements IPaymentInstrument {
  validate(): void {
    console.log("Verificar pontuação no rewards");
  }

  collectPayment(): void {
    console.log("Pagando com a pontuação do rewards");
  }
}
