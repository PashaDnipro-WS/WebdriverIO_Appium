import Page from './page.js';

class InterestsPage extends Page {
    private screenTitle = 'android=new UiSelector().text("Interests")';

    private selectedTopicCheckbox = (topic: string) =>
        `//android.widget.TextView[@text="${topic}"]` +
        `/ancestor::android.view.View[@checkable="true"][1]` +
        `//android.view.View[@content-desc="Unfollow interest"]`;

    private topicTitle = (topic: string) =>
        `android=new UiSelector().text("${topic}")`;

    private topicDescription = (text: string) =>
        `android=new UiSelector().textContains("${text}")`;

    async isDisplayed() {
        return this.isElementDisplayed(this.screenTitle);
    }

    async isTopicSelected(topic: string) {
        await this.scrollToTextFromTop(topic);

        return this.isElementDisplayed(
            this.selectedTopicCheckbox(topic)
        );
    }

    async openTopic(topic: string) {
        await this.scrollToText(topic);
        await this.clickElement(this.topicTitle(topic));
    }

    async isTopicPageOpened(topic: string) {
        return this.isElementDisplayed(this.topicTitle(topic));
    }

    async isCameraAndMediaContentDisplayed() {
        return this.isElementDisplayed(
            this.topicDescription('capturing and playing media')
        );
    }
}

export default new InterestsPage();