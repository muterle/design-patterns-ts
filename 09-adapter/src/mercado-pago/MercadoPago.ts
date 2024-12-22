import Token from "../utils/Token";
import IMercadoPagoPayment from "./IMercadoPagoPayment";

export default class MercadoPago implements IMercadoPagoPayment {
  private token: Token;

  authToken(): Token {
    return new Token();
  }

  sendPagamento(): void {
    this.token = this.authToken();
    console.log("Token: " + this.token.getToken());
    console.log("Enviando pagamentos via Mercado Pago.");
  }

  receivePagamento(): void {
    console.log("Recebendo pagamentos via Mercado Pago.");
  }
}
