import MercadoPago from "../mercado-pago/MercadoPago";
import IPayPalPayment from "../pay-pal/IPayPalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayment {
  constructor(private mercadoPago: MercadoPago) {
    console.log("Adaptando Mercado Pago para o sistema PayPal.");
  }

  authToken(): Token {
    return this.mercadoPago.authToken();
  }

  payPalPayment(): void {
    this.mercadoPago.sendPagamento();
  }

  payPalReceive(): void {
    this.mercadoPago.receivePagamento();
  }
}
