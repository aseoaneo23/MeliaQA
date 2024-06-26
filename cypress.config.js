const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: "cypress/features/**/*.feature",
    baseUrl: "https://www.melia.com/es/",
    chromeWebSecurity: false,
    firefoxWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 100000,
    pageLoadTimeout: 1000000,
    modifyObstructiveCode: true,
    experimentalOriginDependencies: true,
    experimentalModifyObstructiveThirdPartyCode: true
  },
});
