import { defineConfig } from "cypress";
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
declare const allure: any;
export default defineConfig({
  defaultCommandTimeout: 8000,
  env: {
    url: "https://rahulshettyacademy.com"
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on, config);
      return config;
    },
    specPattern: "./cypress/integration/examples/*.ts",
    projectId: "1"
  },
});
