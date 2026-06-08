import { expect, driver } from '@wdio/globals';

import ForYouPage from '../pageobjects/for-you.page.js';
import InterestsPage from '../pageobjects/interests.page.js';
import SavedPage from '../pageobjects/saved.page.js';
import SearchPage from '../pageobjects/search.page.js';

const APP_ID = 'com.google.samples.apps.nowinandroid.demo.debug';

describe('Now in Android', () => {
    beforeEach(async () => {
        await driver.terminateApp(APP_ID);
        await driver.execute('mobile: clearApp', { appId: APP_ID });
        await driver.activateApp(APP_ID);

        await expect(await ForYouPage.isDisplayed()).toBe(true);
    });

    it('should show article after selecting UI topic', async () => {
        await ForYouPage.selectUiTopic();
        await ForYouPage.tapDone();

        await expect(await ForYouPage.isFirstArticleDisplayed()).toBe(true);
    });

    it('should show selected Headlines, UI and Testing topics in Interests', async () => {
        await ForYouPage.selectHeadlinesTopic();
        await ForYouPage.selectUiTopic();
        await ForYouPage.selectComposeTopic();

        await ForYouPage.openInterestsTab();

        await expect(await InterestsPage.isDisplayed()).toBe(true);

        await expect(await InterestsPage.isTopicSelected('Headlines')).toBe(true);
        await expect(await InterestsPage.isTopicSelected('UI')).toBe(true);
        await expect(await InterestsPage.isTopicSelected('Compose')).toBe(true);
    });

    it('should save two Compose articles and show them in Saved', async () => {
        await ForYouPage.selectComposeTopic();
        await ForYouPage.tapDone();

        await ForYouPage.bookmarkArticle('The new Google Pixel Watch');
        await ForYouPage.bookmarkArticle('MAD Skills Compose');

        await ForYouPage.openSavedTab();

        await expect(await SavedPage.isDisplayed()).toBe(true);
        await expect(await SavedPage.isArticleSaved('The new Google Pixel Watch')).toBe(true);
        await expect(await SavedPage.isArticleSaved('MAD Skills Compose')).toBe(true);
    });

    it('should follow UI topic from search and show it selected on For You page', async () => {
        await ForYouPage.openSearch();

        await SearchPage.searchByText('Design');
        await SearchPage.openUiTopic();

        await SearchPage.followTopic();

        await expect(await SearchPage.isTopicFollowing()).toBe(true);

        await ForYouPage.openForYouTab();

        await expect(await ForYouPage.isUiTopicSelected()).toBe(true);
    });

    it('should open Camera & Media topic page from Interests', async () => {
        await ForYouPage.openInterestsTab();

        await expect(await InterestsPage.isDisplayed()).toBe(true);

        await InterestsPage.openTopic('Camera & Media');

        await expect(
            await InterestsPage.isTopicPageOpened('Camera & Media')
        ).toBe(true);

        await expect(
            await InterestsPage.isCameraAndMediaContentDisplayed()
        ).toBe(true);
    });
});