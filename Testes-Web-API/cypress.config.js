const { defineConfig } = require('cypress')
const { plugin } = require('@cypress/grep/plugin')

module.exports = defineConfig({
  expose: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      charts: true,
      reportPageTitle: 'SeaTecnologia Test Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveJson: true, 
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      plugin(config)
      return config
    },
    baseUrl: 'https://analista-teste.seatecnologia.com.br',
  },
})