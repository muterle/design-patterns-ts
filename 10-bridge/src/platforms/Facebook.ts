import IPlatform from "./IPlatform";

export default class Facebook implements IPlatform {
  constructor() {
    this.configureRMTP();
    console.log("Facebook: Broadcasting started!");
  }
  configureRMTP() {
    this.authToken();
    console.log("Facebook: Broadcasting configured!");
  }
  authToken() {
    console.log("Facebook: Auth token generated!");
  }
}
