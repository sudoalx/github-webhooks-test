import express from "express";
import { environment } from "./config";
import { GithubController } from "./presentation/github/controller";
import { GitHubSha256Middleware } from "./presentation/middlewares/github-sha256.middleware";
(() => {
  main();
})();

function main() {
  const app = express();
  const controller = new GithubController();

  app.use(express.json());
  app.use(GitHubSha256Middleware.verifySignature);
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
