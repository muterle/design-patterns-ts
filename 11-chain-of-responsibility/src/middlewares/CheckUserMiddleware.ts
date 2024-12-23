import { green, red } from "chalk";
import DataBase from "../servers/Database";
import Middleware from "./Middleware";

export default class CheckUserMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    if (!email.includes("@")) {
      console.log(red("Email is incorrect"));
      return false;
    }

    const user = DataBase.find((user) => user.email === email && user.password === password);

    if (user) {
      console.log(green(`User found: ${user.email} ${user.permission}`));
      return this.checkNext(email, password);
    }

    console.log(red("Email or password invalid!"));
    return false;
  }
}
