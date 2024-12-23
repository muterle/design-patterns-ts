import IPlatform from "../platforms/IPlatform";
import Live from "./Live";

export default class AdvancedLive extends Live {
  constructor(platform: IPlatform) {
    super(platform);
  }

  subtitles(): void {
    console.log("Subtitles started.");
  }

  comments(): void {
    console.log("Comments enabled.");
  }
}
