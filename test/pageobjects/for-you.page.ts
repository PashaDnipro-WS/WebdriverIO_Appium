import Page from './page.js';

class ForYouPage extends Page {
    private screenTitle = 'android=new UiSelector().text("Now in Android")';

    private searchButton = '~Search';

    private headlinesTopic = '~Headlines';
    private uiTopic = '~UI';
    private composeTopic = '~Compose';
    private testingTopic = '~Testing';

    private doneButton = 'android=new UiSelector().text("Done")';

    private firstArticleTitle =
        'android=new UiSelector().textContains("Deep Links Crash Course")';

    private forYouTab = 'android=new UiSelector().text("For you")';
    private savedTab = 'android=new UiSelector().text("Saved")';
    private interestsTab = 'android=new UiSelector().text("Interests")';

    private articleTitle = (title: string) =>
        `android=new UiSelector().textContains("${title}")`;

    private bookmarkButton = '~Bookmark';

    async isDisplayed() {
        return this.isElementDisplayed(this.screenTitle);
    }

    async openSearch() {
        await this.clickElement(this.searchButton);
    }

    async selectHeadlinesTopic() {
        await this.clickElement(this.headlinesTopic);
    }

    async selectUiTopic() {
        await this.clickElement(this.uiTopic);
    }

    async selectComposeTopic() {
        await this.clickElement(this.composeTopic);
    }

    async selectTestingTopic() {
        await this.scrollToText('Testing');
        await this.clickElement(this.testingTopic);
    }

    async tapDone() {
        await this.clickElement(this.doneButton);
    }

    async isFirstArticleDisplayed() {
        return this.isElementDisplayed(this.firstArticleTitle);
    }

    async openForYouTab() {
        await this.clickElement(this.forYouTab);
    }

    async openSavedTab() {
        await this.clickElement(this.savedTab);
    }

    async openInterestsTab() {
        await this.clickElement(this.interestsTab);
    }

    async bookmarkArticleByTitle(title: string) {
        await this.scrollToTextContains(title);

        const buttons = await this.getElements(this.bookmarkButton);

        for (const button of buttons) {
            if (await button.isDisplayed()) {
                await button.click();
                return;
            }
        }

        throw new Error(`Bookmark button for article "${title}" was not found`);
    }

    async isArticleDisplayedByTitle(title: string) {
        await this.scrollToTextContains(title);
        return this.isElementDisplayed(this.articleTitle(title));
    }

    async isUiTopicSelected() {
        return this.isElementDisplayed('~UI');
    }
}

export default new ForYouPage();