import { test, expect } from "@playwright/test";

test.describe.only("Navigate to web app security website", async () => {
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

    await username_txt.fill("username");
    await password_txt.type("password");
    await signin_btn.click();
    await expect(error_msg).not.toBeVisible;

    await page.goto("http://zero.webappsecurity.com/bank/pay-bills.html");

    const payeeList = await page.locator("#sp_payee");
    await payeeList.selectOption("sprint");

    const accountList = await page.locator("#sp_account");
    await accountList.selectOption("1");

    const amountField = await page.locator("#sp_amount");
    await amountField.type("500");

    const datePicker = await page.locator("#sp_date");
    await datePicker.fill("2023-04-23");

    const descriptionField = await page.locator("#sp_description");
    await descriptionField.fill("2023-04-23");

    const payAmountBtn = await page.locator("#pay_saved_payees");
    await payAmountBtn.click();

    const paymentNotification = await page.locator("div.alert-success");
    await expect(paymentNotification).toBeVisible;

    const successMsg = await page.locator("#alert_content span");
    await expect(paymentNotification).toContainText(
      "The payment was successfully submitted."
    );
  });
});
