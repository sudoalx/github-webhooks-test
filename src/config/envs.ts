import "dotenv/config";
import { get } from "env-var";

export const environment = {
  PORT: get("PORT").default(3000).asPortNumber(),
  NODE_ENV: get("NODE_ENV").default("development").asString(),
};
