import { config as sharedConfig } from './wdio.conf.js'
import dotenv from 'dotenv'

dotenv.config()

export const config = {
  ...sharedConfig,

  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  hostname: 'hub.browserstack.com',

  services: [
    ['browserstack', {
      app: process.env.BROWSERSTACK_ANDROID_APP_ID,
      testObservability: true,
      testObservabilityOptions: {
        projectName: 'BrowserStack Android app testing',
        buildName: 'browserstack Android build',
      },
      debug: true,
      networkLogs: true,
      consoleLogs: 'warnings'
    }]
  ],

  capabilities: [{
    'bstack:options': {
      deviceName: 'Samsung Galaxy S22 Ultra',
      osVersion: '12.0',
      deviceOrientation: 'portrait',
      buildName: `Android build ${process.env.GITHUB_RUN_NUMBER || 'local'}`
    },
    'appium:options': {
      automationName: 'UiAutomator2',
      autoAcceptAlerts: true,
      autoGrantPermissions: true,
      newCommandTimeout: 300,
      orientation: 'PORTRAIT',
      noReset: false
    }
  }]
}