import IPayPalPayment from "../pay-pal/IPayPalPayment";
import Payonner from "../payonner/Payonner";
import Token from "../utils/Token";

export default class PayonnerAdapter implements IPayPalPayment {
  constructor(private payonner: Payonner) {
    console.log("Adaptando Payonner para o sistema PayPal.");
  }

  authToken(): Token {
    return this.payonner.authToken();
  }

  payPalPayment(): void {
    return this.payonner.sendPayment();
  }

  payPalReceive(): void {
    return this.payonner.receivePayment();
  }
}
