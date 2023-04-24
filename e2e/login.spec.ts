import { test, expect } from "@playwright/test";

test.describe("Navigate to web app security website", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com");
  });

  test("Invalid login", async ({ page }) => {
    const login_btn = await page.locator("#signin_button");
    login_btn.click();

    const username_txt = await page.locator("#user_login");
    const password_txt = await page.locator("#user_password");
    const signin_btn = await page.locator("input[name='submit']");
    const error_msg = await page.locator(".alert-error");

    await username_txt.fill("dummy-user");
    await password_txt.type("dummy-password");
    await signin_btn.click();

    await expect(error_msg).toBeVisible;
  });

  test("Valid login", async ({ page }) => {
    const login_btn = await page.locator("#signin_button");
    login_btn.click();

    const username_txt = await page.locator("#user_login");
    const password_txt = await page.locator("#user_password");
    const signin_btn = await page.locator("input[name='submit']");
    const error_msg = await page.locator(".alert-error");

    await username_txt.fill("username");
    await password_txt.type("password");
    await signin_btn.click();
    await expect(error_msg).not.toBeVisible;

    await page.goto("http://zero.webappsecurity.com/bank/transfer-funds.html");

    const accountSummaryTab = await page.locator("#account_summary_tab");
    await expect(accountSummaryTab).toBeVisible();
  });
});
