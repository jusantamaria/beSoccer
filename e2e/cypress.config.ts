import { defineConfig } from "cypress";
const fs = require('fs');

export default defineConfig({
  e2e: {
    baseUrl: "https://www.besoccer.com/",
    specPattern: 'cypress/e2e/**/*.test.ts',
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
