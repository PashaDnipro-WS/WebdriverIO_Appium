import { config as sharedConfig } from './wdio.conf.js'
import { join } from 'path'

export const config = {
  ...sharedConfig,

  port: 4723,

  services: ['appium'],

  appium: {
    command: 'appium',
    args: [
      '--relaxed-security',
      '--session-override'
    ]
  },

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'RF8R90007TX',
    'appium:udid': 'RF8R90007TX',
    'appium:app': join(process.cwd(), './apps/android/app-demo-debug.apk'),
    'appium:automationName': 'UiAutomator2',
    'appium:newCommandTimeout': 300,
    'appium:noReset': false,
    'appium:autoGrantPermissions': true
  }]
}