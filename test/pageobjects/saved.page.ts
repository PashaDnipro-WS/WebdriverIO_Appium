import Page from './page.js';

class SavedPage extends Page {
    private screenTitle = 'android=new UiSelector().text("Saved")';

    private articleTitle = (title: string) =>
        `android=new UiSelector().textContains("${title}")`;

    async isDisplayed() {
        return this.isElementDisplayed(this.screenTitle);
    }

    async isArticleSaved(title: string) {
        await this.scrollToTextContains(title);
        return this.isElementDisplayed(this.articleTitle(title));
    }
}

export default new SavedPage();