import Page from './page.js';

class ForYouPage extends Page {
    private screenTitle = 'android=new UiSelector().text("Now in Android")';
    private searchButton = '~Search';
    private settingsButton = '~Settings';

    private interestsTitle = 'android=new UiSelector().text("What are you interested in?")';

    private headlinesTopic = '~Headlines';
    private uiTopic = '~UI';
    private composeTopic = '~Compose';
    private architectureTopic = '~Architecture';
    private androidStudioTopic = '~Android Studio & Tools';
    private testingTopic = '~Testing';

    private doneButton = 'android=new UiSelector().text("Done")';

    private firstArticleTitle = 'android=new UiSelector().textContains("Deep Links Crash Course")';

    private forYouTab = 'android=new UiSelector().text("For you")';
    private savedTab = 'android=new UiSelector().text("Saved")';
    private interestsTab = 'android=new UiSelector().text("Interests")';

    private articleTitle = (title: string) =>
        `android=new UiSelector().textContains("${title}")`;

    private bookmarkButtonByArticle = (title: string) =>
        `//android.widget.TextView[contains(@text, "${title}")]
    /following::android.view.View[@content-desc="Bookmark"][1]`;

    async isDisplayed() {
        return this.isElementDisplayed(this.screenTitle);
    }

    async isInterestsBlockDisplayed() {
        return this.isElementDisplayed(this.interestsTitle);
    }

    async openSearch() {
        await this.clickElement(this.searchButton);
    }

    async openSettings() {
        await this.clickElement(this.settingsButton);
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

    async selectArchitectureTopic() {
        await this.clickElement(this.architectureTopic);
    }

    async selectAndroidStudioTopic() {
        await this.clickElement(this.androidStudioTopic);
    }

    async selectTestingTopic() {
        await this.scrollToText('Testing');
        await this.clickElement(this.testingTopic);
    }

    async tapDone() {
        await this.clickElement(this.doneButton);
    }

    async isDoneButtonDisplayed() {
        return this.isElementDisplayed(this.doneButton);
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

    async bookmarkArticle(title: string) {
        await this.scrollToTextContains(title);
        await this.clickElement(this.bookmarkButtonByArticle(title));
        await browser.pause(500);
    }

    async isArticleDisplayedByTitle(title: string) {
        await this.scrollToText(title);
        return this.isElementDisplayed(this.articleTitle(title));
    }

    async isUiTopicSelected() {
        return this.isElementDisplayed('~UI');
    }
}

export default new ForYouPage();