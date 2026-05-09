import "dotenv/config";
import { defineConfig } from "prisma/config";
import { EnvVars } from "./src/config/env";

export default defineConfig({
  schema: "prisma/schema",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url:  EnvVars.DATABASE_URL!,
  },
});
