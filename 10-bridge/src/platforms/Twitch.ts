import IPlatform from "./IPlatform";

export class Twitch implements IPlatform {
  constructor() {
    this.configureRMTP();
    console.log("Twitch: Broadcasting started!");
  }

  configureRMTP(): void {
    this.authToken();
    console.log("Twitch: Broadcasting configured!");
  }

  authToken(): void {
    console.log("Twitch: AuthToken acquired!");
  }
}
