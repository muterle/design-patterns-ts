import IPaymentInstrument from "./IPaymentInstrument";

export default abstract class NubankCard implements IPaymentInstrument {
  validate(): void {
    console.log("Validando cartão Nubank");
  }
  collectPayment(): void {
    console.log("Pagamento realizado com cartão");
  }
}
