import express from "express";
import { environment } from "./config";
import { GithubController } from "./presentation/github/controller";
(() => {
  main();
})();

function main() {
  const app = express();
  const controller = new GithubController();

  app.post("/api/github", controller.webhookHandler);

  app.listen(environment.PORT, () => {
    console.log(
      `Server is running on ${
        environment.NODE_ENV === "development"
          ? `http://localhost ${environment.PORT}`
          : "port " + environment.PORT
      }`
    );
  });
}
