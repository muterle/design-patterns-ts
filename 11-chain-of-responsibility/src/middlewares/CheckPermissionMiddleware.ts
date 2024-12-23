import { blue, green, red, magenta } from "chalk";
import DataBase from "../servers/Database";
import PermissionType from "../servers/PermissionType";
import Middleware from "./Middleware";

export default class CheckPermissionMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    if (!email.includes("@")) {
      console.log(red("Email is incorrect"));
      return false;
    }

    const user = DataBase.find((user) => user.email === email && user.password === password);

    if (!user) {
      console.log(red("User not found"));
      return false;
    }

    if (user.permission === PermissionType.ADMIN) {
      console.log(magenta("Welcome Admin"));
      return true;
    }

    console.log(blue("Welcome User"));

    return this.checkNext(email, password);
  }
}
