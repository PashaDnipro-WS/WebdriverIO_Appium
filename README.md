## View Latest Report

[![View Allure Report](https://img.shields.io/badge/View-Allure_Report-blue)](https://pashadnipro-ws.github.io/WebdriverIO_Appium/)

## Project Structure

```text
config/
├── wdio.conf.ts
├── wdio.conf.android.ts
└── wdio.conf.android.bs.ts

test/
├── pageobjects/
└── specs/
```

## Installation

```bash
npm install
```

## Local Android Execution

Connect an Android device and run:

```bash
npm run test:android
```

## BrowserStack Execution

Create a `.env` file:

```env
BROWSERSTACK_USERNAME=your_username
BROWSERSTACK_ACCESS_KEY=your_access_key
BROWSERSTACK_ANDROID_APP_ID=bs://your_app_id
```

Run tests:

```bash
npm run test:android:bs
```

## Allure Report

Generate report:

```bash
npm run allure:generate
```

Open report:

```bash
npm run allure:open
```

## CI

Tests are executed automatically through GitHub Actions on every push to the `main` branch.
