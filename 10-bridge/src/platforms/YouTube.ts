import IPlatform from "./IPlatform";

export class YouTube implements IPlatform {
  constructor() {
    this.configureRMTP();
    console.log("YouTube: Broadcasting started!");
  }

  configureRMTP(): void {
    this.authToken();
    console.log("YouTube: Broadcasting configured!");
  }

  authToken(): void {
    console.log("YouTube: AuthToken acquired!");
  }
}
