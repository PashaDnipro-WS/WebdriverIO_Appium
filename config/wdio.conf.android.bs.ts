import { config as sharedConfig } from './wdio.conf.js'
import dotenv from 'dotenv'

dotenv.config()

export const config = {
  ...sharedConfig,

  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  hostname: 'hub.browserstack.com',
  protocol: 'https',
  port: 443,
  path: '/wd/hub',

  services: [
    ['browserstack', {
      app: process.env.BROWSERSTACK_ANDROID_APP_ID,
      browserstackLocal: false,
      debug: true,
      networkLogs: true,
      consoleLogs: 'warnings',
      testObservability: false
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
      newCommandTimeout: 300
    }
  }]
}