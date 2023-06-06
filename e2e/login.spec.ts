import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";
import { TransferFundsPage } from "../page-objects/TransferFundsPage";
import { HomePage } from "../page-objects/HomePage";

test.describe("Navigate to web app security website", async () => {

  let homePage : HomePage
  let loginPage : LoginPage
  let transferFundsPage : TransferFundsPage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page); 
    transferFundsPage = new TransferFundsPage(page);

    await homePage.visit();
    //await page.goto("http://zero.webappsecurity.com");
  });

  test("Invalid login", async ({ page }) => {
    homePage.signInBtn.click();

    await loginPage.usernameInput.fill("dummy-user");
    await loginPage.passwordInput.type("dummy-password");
    await loginPage.submitButton.click();

    await expect(loginPage.errorMessage).toBeVisible;
  });

  test("Valid login", async ({ page }) => {
    const login_btn = await page.locator("#signin_button");
    login_btn.click();

    await loginPage.usernameInput.fill("username");
    await loginPage.passwordInput.type("password");
    await loginPage.submitButton.click();
    await expect(loginPage.errorMessage).not.toBeVisible;

    await transferFundsPage.visit();
    await expect(transferFundsPage.accountSummaryTab).toBeVisible();
  });
});
