import { test, expect } from '@playwright/test';
import { FeedbackPage } from '../../page-objects/FeedbackPage';
import { HomePage } from '../../page-objects/HomePage';

test.describe('Navigate to web app security website', async () => {
  let homePage: HomePage;
  let feedbackPage: FeedbackPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    feedbackPage = new FeedbackPage(page);

    await homePage.visit();
  });

  test('Fill in feedback form', async () => {
    const feedbackTab = await homePage.feedbackTab;
    await feedbackTab.click();

    await feedbackPage.fillFeedbackForm(
      'sample name',
      'sample@email.com',
      'sample subject',
      'sample contents are being entered here'
    );

    await feedbackPage.submitFeedbackForm();

    const feedbackSubmissionTitle = await feedbackPage.feedbackSubmissionTitle;
    await expect(feedbackSubmissionTitle).toBeVisible();
  });

  test('Clear feedback form', async () => {
    const feedbackTab = await homePage.feedbackTab;
    await feedbackTab.click();

    await feedbackPage.fillFeedbackForm(
      'sample name',
      'sample@email.com',
      'sample subject',
      'sample contents are being entered here'
    );

    await feedbackPage.clearFeedbackForm();

    const nameField = await feedbackPage.nameField;
    const emailField = await feedbackPage.emailField;
    const subjectField = await feedbackPage.subjectField;
    const commentField = await feedbackPage.commentField;

    await expect(nameField).toBeEmpty();
    await expect(emailField).toBeEmpty();
    await expect(subjectField).toBeEmpty();
    await expect(commentField).toBeEmpty();
  });
});
