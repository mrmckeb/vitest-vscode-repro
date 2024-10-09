import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  {
    extends: "./vitest.config.ts",
    test: {
      name: "unit",
      include: ["**/*.unit.test.ts"],
    },
  },
  {
    extends: "./vitest.config.ts",
    test: {
      name: "integration",
      environment: "jsdom",
      include: ["**/*.integration.test.ts"],
    },
  },
]);
