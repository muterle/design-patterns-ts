import { createInterface } from "readline";

import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import Server from "./servers/Server";
import CheckEasyPasswordMiddleware from "./middlewares/CheckEasyPasswordMiddleware";

const server = new Server();

function setPromptQuestions() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Email: ", (email) => {
    rl.question("Password: ", (password) => {
      server.logIn(email, password);
      rl.close();
    });
  });

  rl.on("close", () => setPromptQuestions());
}

const middleware = new CheckUserMiddleware();
middleware.linkWith(new CheckPermissionMiddleware());
middleware.linkWith(new CheckEasyPasswordMiddleware());

server.setMiddleware(middleware);

setPromptQuestions();
