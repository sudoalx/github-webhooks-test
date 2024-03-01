import "dotenv/config";
import { get } from "env-var";

export const environment = {
  PORT: get("PORT").default(3000).asPortNumber(),
  NODE_ENV: get("NODE_ENV").default("development").asString(),
  DISCORD_WEBHOOK_URL: get("DISCORD_WEBHOOK_URL").required().asString(),
  SECRET_TOKEN: get("SECRET_TOKEN").required().asString(),
};
