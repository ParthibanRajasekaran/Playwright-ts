import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 13'],
});

test.describe.skip('Navigate to web app security website', async () => {
  test('test', async ({ page }) => {
    await page.goto('https://www.google.com/?gws_rd=ssl');
    await page.click('button:has-text("Read more")');
    await page.click('button:has-text("Read more")');
    await page.click('button:has-text("Reject all")');
    await page.goto(
      'https://consent.yahoo.com/v2/collectConsent?sessionId=3_cc-session_8052d1c8-2efd-4a45-b51d-7f062db7b4e1'
    );
    await page.click('button:has-text("Reject all")');
  });
});
