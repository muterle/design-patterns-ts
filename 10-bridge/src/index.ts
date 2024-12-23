import Facebook from "./platforms/Facebook";
import IPlatform from "./platforms/IPlatform";
import { Twitch } from "./platforms/Twitch";
import { YouTube } from "./platforms/YouTube";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

const startLive = (platform: IPlatform) => {
  console.log("Await...");

  const live = new Live(platform);
  live.broadcasting();
  live.result();
};

// startLive(new Facebook());
// startLive(new YouTube());
// startLive(new Twitch());

const startAdvancedLive = (platform: IPlatform) => {
  console.log("Await...");

  const live = new AdvancedLive(platform);

  live.broadcasting();
  live.result();
  live.subtitles();
  live.comments();
};

startAdvancedLive(new Facebook());
startAdvancedLive(new YouTube());
startAdvancedLive(new Twitch());
