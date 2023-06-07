import { test, expect } from "@playwright/test";
import { HomePage } from "../page-objects/HomePage";
import { PaymentsPage } from "../page-objects/PaymentsPage";
import { LoginPage } from "../page-objects/LoginPage";

test.describe("Navigate to web app security website", async () => {
  let homePage: HomePage;
  let loginPage: LoginPage;
  let paymentsPage: PaymentsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    paymentsPage = new PaymentsPage(page);

    await homePage.visit();
    homePage.signInBtn.click();
  });

  test("Invalid login and submit payment", async () => {
    await loginPage.signIn("username", "password");
    await expect(loginPage.errorMessage).not.toBeVisible();

    await paymentsPage.visit();

    await paymentsPage.selectPayee("sprint");
    await paymentsPage.selectAccount("1");
    await paymentsPage.enterAmount("500");
    await paymentsPage.enterDate("2023-04-23");
    await paymentsPage.enterDescription("2023-04-23");

    await paymentsPage.submitPayment();
    await expect(paymentsPage.paymentNotification).toBeVisible();
    await expect(paymentsPage.successMessage).toContainText("The payment was successfully submitted.");
  });
});
