import { test, expect, Page } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";
import { TransferFundsPage } from "../page-objects/TransferFundsPage";
import { HomePage } from "../page-objects/HomePage";

test.describe("Navigate to web app security website", async () => {

  let homePage : HomePage
  let loginPage : LoginPage
  let transferFundsPage : TransferFundsPage

  function initializePageObjects(page: Page) {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const transferFundsPage = new TransferFundsPage(page);
    return { homePage, loginPage, transferFundsPage };
  }
  
  test.beforeEach(async ({ page }) => {
    const pageObjects = initializePageObjects(page);

    homePage = pageObjects.homePage;
    loginPage = pageObjects.loginPage;
    transferFundsPage = pageObjects.transferFundsPage;
  
    await homePage.visit();
  });
  

  test("Should display error message for invalid login", async ({ page }) => {
    homePage.signInBtn.click();
  
    await loginPage.usernameInput.fill("dummy-user");
    await loginPage.passwordInput.type("dummy-password");
    await loginPage.submitButton.click();
  
    await expect(loginPage.errorMessage).toBeVisible;
  });
  

  test("Should login successfully and navigate to transfer funds page", async ({ page }) => {
    homePage.signInBtn.click();

    await loginPage.usernameInput.fill("username");
    await loginPage.passwordInput.type("password");
    await loginPage.submitButton.click();
    await expect(loginPage.errorMessage).not.toBeVisible;

    await transferFundsPage.visit();
    await expect(transferFundsPage.accountSummaryTab).toBeVisible();
  });
});
