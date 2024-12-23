import { green, red } from "chalk";
import Middleware from "../middlewares/Middleware";

export default class Server {
  private middleware: Middleware;

  public setMiddleware(middleware: Middleware): void {
    this.middleware = middleware;
  }

  public logIn(email: string, password: string): boolean {
    if (this.middleware.check(email, password)) {
      console.log(green("Authorization have been successful!"));
      return true;
    }

    console.log(red("Authorization failed!"));
    return false;
  }
}
