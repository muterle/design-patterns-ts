import Client from "./Client";

export default class Notify {
  constructor(private readonly client: Client) {}

  sendEmail(): boolean {
    this.client.email;
    console.log(this.client.email);

    return true;
  }
}
