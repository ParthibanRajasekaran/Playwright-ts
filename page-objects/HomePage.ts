import { Expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly signInBtn: Locator;
  readonly feedbackTab: Locator;
  readonly searchBar: Locator;

  constructor(page: Page) {
    super(page);
    this.signInBtn = page.locator('#signin_button');
    this.feedbackTab = page.locator('li#feedback');
    this.searchBar = page.locator('#searchTerm');
  }

  async visit() {
    await this.page.goto('http://zero.webappsecurity.com');
  }

  async searchForTerm(term: string) {
    await this.searchBar.type(term);
    await this.page.keyboard.press('Enter');
  }
}
