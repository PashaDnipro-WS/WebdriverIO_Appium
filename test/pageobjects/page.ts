import { browser, $, $$ } from '@wdio/globals';

export default class Page {
    async waitUntilElementDisplayed(selector: string, timeout = 10000) {
        await browser.waitUntil(async () => {
            try {
                return await $(selector).isDisplayed();
            } catch {
                return false;
            }
        }, {
            timeout,
            interval: 500,
            timeoutMsg: `Element ${selector} was not displayed within ${timeout}ms`
        });
    }

    async clickElement(selector: string) {
        await this.waitUntilElementDisplayed(selector);
        await $(selector).click();
    }

    async setElementInputValue(selector: string, value: string) {
        await this.waitUntilElementDisplayed(selector);
        await $(selector).setValue(value);
    }

    async isElementDisplayed(selector: string) {
        try {
            return await $(selector).isDisplayed();
        } catch {
            return false;
        }
    }

    async getElements(selector: string) {
        return $$(selector);
    }

    async scrollToText(text: string) {
        await $(
            `android=new UiScrollable(new UiSelector().scrollable(true))` +
            `.scrollIntoView(new UiSelector().text("${text}"))`
        );

        await browser.pause(500);
    }

    async scrollToTextContains(text: string) {
        await $(
            `android=new UiScrollable(new UiSelector().scrollable(true))` +
            `.scrollIntoView(new UiSelector().textContains("${text}"))`
        );

        await browser.pause(500);
    }

    async scrollToTextFromTop(text: string) {
        await $(
            `android=new UiScrollable(new UiSelector().scrollable(true))` +
            `.scrollToBeginning(10)`
        );

        await $(
            `android=new UiScrollable(new UiSelector().scrollable(true))` +
            `.scrollIntoView(new UiSelector().text("${text}"))`
        );

        await browser.pause(500);
    }

    async swipeUp() {
        const { height, width } = await browser.getWindowSize();

        await browser.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                {
                    type: 'pointerMove',
                    duration: 0,
                    x: Math.floor(width / 2),
                    y: Math.floor(height * 0.78)
                },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 250 },
                {
                    type: 'pointerMove',
                    duration: 600,
                    x: Math.floor(width / 2),
                    y: Math.floor(height * 0.25)
                },
                { type: 'pointerUp', button: 0 }
            ]
        }]);

        await browser.releaseActions();
        await browser.pause(800);
    }

    async clickAndroidBackBtn() {
        await browser.pressKeyCode(4);
    }
}