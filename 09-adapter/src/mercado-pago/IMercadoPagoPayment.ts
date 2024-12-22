import Token from "../utils/Token";

export default interface IMercadoPagoPayment {
  authToken(): Token;
  sendPagamento(): void;
  receivePagamento(): void;
}
