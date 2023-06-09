import { test, expect } from '@playwright/test';
import { HomePage } from '../../page-objects/HomePage';
import { SearchPage } from '../../page-objects/SearchPage';

test.describe('Navigate to web app security website', () => {
  let homePage: HomePage;
  let searchPage: SearchPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    searchPage = new SearchPage(page);

    await homePage.visit();
  });

  test('Should find search results', async () => {
    await homePage.searchForTerm('banking');

    // Add a delay or wait for a condition here if needed
    await searchPage.page.waitForTimeout(1000); // Wait for 1 second

    // Print out the number of search results
    const resultsCount = await searchPage.getSearchResultsCount();
    expect(resultsCount).toBe(2);
  });
});
