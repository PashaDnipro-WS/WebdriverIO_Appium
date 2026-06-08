import Page from './page.js';

class SearchPage extends Page {
    private searchInput = '//android.widget.EditText';

    private uiTopic = 'android=new UiSelector().text("UI")';

    private unfollowingButton = 'android=new UiSelector().text("NOT FOLLOWING")';
    private followingButton = 'android=new UiSelector().text("FOLLOWING")';

    async searchByText(text: string) {
        const input = await $(this.searchInput);

        await input.waitForDisplayed();
        await input.setValue(text);
    }

    async openUiTopic() {
        await this.clickElement(this.uiTopic);
    }

    async followTopic() {
        await this.clickElement(this.unfollowingButton);
    }

    async isTopicFollowing() {
        return this.isElementDisplayed(this.followingButton);
    }
}

export default new SearchPage();