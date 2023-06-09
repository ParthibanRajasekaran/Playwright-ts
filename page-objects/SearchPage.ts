import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class SearchPage extends BasePage {
  readonly searchTxt: Locator;
  readonly searchResults: Locator;

  constructor(page: Page) {
    super(page);
    this.searchTxt = page.locator('#searchTerm');
    this.searchResults = page.locator('.top_offset li a');
  }

  async searchFor(term: string) {
    await this.searchTxt.fill(term);
    await this.page.keyboard.press('Enter');
  }

  async getSearchResultsCount() {
    return await this.searchResults.count();
  }
}
