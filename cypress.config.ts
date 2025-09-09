import { defineConfig } from 'cypress'

export default defineConfig({
  pageLoadTimeout: 90000,
  defaultCommandTimeout: 9000,
  requestTimeout: 10000,
  responseTimeout: 40000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  modifyObstructiveCode: true,
  trashAssetsBeforeRuns: true,
  waitForAnimations: true,
  animationDistanceThreshold: 50,
  watchForFileChanges: false,
  redirectionLimit: 60,
  retries: { runMode: 1, openMode: 0 },
  video: false,
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 1,
  experimentalWebKitSupport: true,

  blockHosts: ['*.pendo.io'],

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
