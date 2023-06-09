import { test, expect } from '@playwright/test';
import { ExampleHomePage } from '../../page-objects/ExampleHomePage';

test.describe('Visual regression test', () => {
  let exampleHomePage: ExampleHomePage;

  test.beforeEach(async ({ page }) => {
    exampleHomePage = new ExampleHomePage(page);
  });

  test('Full page screenshot', async () => {
    await exampleHomePage.visit();
    expect(await exampleHomePage.takeFullPageScreenshot()).toMatchSnapshot('homepage.png');
  });

  test('Single element screenshot', async () => {
    await exampleHomePage.visit();
    const pageElementScreenshot = await exampleHomePage.takeElementScreenshot('h1');
    expect(pageElementScreenshot).toMatchSnapshot('page-title.png');
  });
  
});
