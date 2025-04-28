const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://golden-movie-studio.vercel.app/', //Url de produção
    //baseUrl: 'http://127.0.0.1:8080/',  //Url local
    video: true
  },
});
