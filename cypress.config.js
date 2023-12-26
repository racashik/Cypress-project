const { defineConfig } = require("cypress");


module.exports = defineConfig({

  defaultCommandTimeout: 6000,
  
  env: {
    url: "https://rahulshettyacademy.com"
  },

  retries: {
    runMode: 1,
  },

  projectId: "khnipu",
  
  e2e: {
       
    specPattern: 'cypress/integration/examples/*.js'
  }
});

