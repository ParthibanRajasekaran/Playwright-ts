import { test, expect } from '@playwright/test';
import { loadExampleHomePage } from '../helpers';

test.describe.parallel.only('Playwright website test suite @playwright', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('has title', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link', async ({ page }) => {
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*intro/);
  });
});

test('Simple demo tests @example', async ({ page }) => {
  loadExampleHomePage(page);

  const pageTitle = await page.locator('h1');
  await expect(pageTitle).toContainText('Example Domain');
});

test('Click and type on element', async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com/index.html');
  await page.click('button#signin_button');

  await page.fill('#user_login', 'dummy-username');
});

test.skip('assertions test', async ({ page }) => {
  await page.goto('https://www.example.com');
  await expect(page).toHaveURL('https://www.example.com');
  await expect(page).toHaveTitle('Example Domain');

  const pageTitle = await page.locator('h1');
  await expect(pageTitle).toBeVisible();

  const nonExistentElement = await page.locator('h5');
  await expect(nonExistentElement).toBeVisible();
});

test('Screenshots test', async ({ page }) => {
  await page.goto('https://www.example.com');
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
});
