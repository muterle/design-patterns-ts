import { red, yellow } from "chalk";
import Middleware from "./Middleware";

export default class CheckEasyPasswordMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    if (password === "123456") {
      console.log(yellow("Password is too easy!"));
    }

    return this.checkNext(email, password);
  }
}
