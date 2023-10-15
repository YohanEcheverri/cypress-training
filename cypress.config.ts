import { defineConfig } from "cypress";

module.exports = defineConfig({
  e2e: {
    video: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {},
    baseUrl: "https://www.demoblaze.com",
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 20000,
  },
  env: {
    userName:"Yohan Echeverri",
    password:"johan0321",
  }
});