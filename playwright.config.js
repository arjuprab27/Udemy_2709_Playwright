// @ts-check
const { defineConfig } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  timeout: 25000,

  expect: {
    timeout: 5000,
  },

  reporter: 'html',

  projects: [
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
        screenshot: 'on',
        headless: false,
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
        },
        trace: 'on',
      },
    },
    {
      name: 'Edge',
      use: {
        browserName: 'chromium',
        channel: 'msedge',
        screenshot:'on',
        headless: false,
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
        },
        trace: 'on',
      },
    },
  ],
});