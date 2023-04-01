const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "65kd7q",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/"
  }

});
