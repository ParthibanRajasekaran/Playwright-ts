import { Page, Locator } from '@playwright/test';

export class ExampleHomePage {
  readonly page: Page;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('h1');
  }

  async visit() {
    await this.page.goto('https://www.example.com');
  }

  async takeFullPageScreenshot() {
    return this.page.screenshot();
  }

  async takeElementScreenshot(selector: string) {
    const element = await this.page.locator(selector).first();
    return element.screenshot();
  }
}
