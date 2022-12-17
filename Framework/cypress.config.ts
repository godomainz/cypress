import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 8000,
  env: {
    url: "https://rahulshettyacademy.com"
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "./cypress/integration/examples/*.ts",
    projectId: "1"
  },
});
