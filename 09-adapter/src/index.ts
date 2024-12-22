import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import PayonnerAdapter from "./adapters/PayonnerAdapter";
import MercadoPago from "./mercado-pago/MercadoPago";
import IPayPalPayment from "./pay-pal/IPayPalPayment";
import PayPal from "./pay-pal/PayPal";
import IPayonnerPayment from "./payonner/IPayonnerPayment";
import Payonner from "./payonner/Payonner";

//const payment: IPayPalPayment = new PayPal();
//const payment: IPayPalPayment = new PayonnerAdapter(new Payonner());
const payment: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago());

payment.payPalPayment();
payment.payPalReceive();
