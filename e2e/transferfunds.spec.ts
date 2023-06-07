import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";
import { HomePage } from "../page-objects/HomePage";
import { TransferFundsPage } from "../page-objects/TransferFundsPage";

test.describe("Navigate to web app security website", () => {
  let homePage: HomePage;
  let loginPage: LoginPage;
  let transferFundsPage: TransferFundsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    transferFundsPage = new TransferFundsPage(page);

    await homePage.visit();
  });

  test("Filter selected", async () => {
    homePage.signInBtn.click();
  
    await loginPage.signIn("username", "password");
    await expect(loginPage.errorMessage).not.toBeVisible;
  
    await transferFundsPage.visit();
    await transferFundsPage.selectFromAccount("2");
    await transferFundsPage.selectToAccount("3");
    await transferFundsPage.enterAmount("1000");
    await transferFundsPage.enterDescription("Dummy Transaction");

    await expect(transferFundsPage.transferSubmissionBtn).toBeEnabled();
    await expect(transferFundsPage.transferSubmissionBtn).toBeVisible();
    await transferFundsPage.submitTransfer();
  
    await expect(transferFundsPage.fromAccount).toBeDisabled;
    await expect(transferFundsPage.toAccount).toBeDisabled;
    await expect(transferFundsPage.amountField).toBeDisabled;
    await expect(transferFundsPage.descriptionField).toBeDisabled;

    await transferFundsPage.confirmTransfer();
  
    expect(await transferFundsPage.isTransferSuccessful()).toBe(true);
  });
});