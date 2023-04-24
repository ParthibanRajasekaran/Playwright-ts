import { test, expect } from "@playwright/test";

test.describe("Navigate to web app security website", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com");
  });

  test("Filter selected", async ({ page }) => {
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

    const fromAccount = await page.locator("#tf_fromAccountId");
    await fromAccount.selectOption("2");

    const toAccount = await page.locator("#tf_toAccountId");
    await toAccount.selectOption("3");

    const amountField = await page.locator("#tf_amount");
    await amountField.fill("1000");

    const descriptionField = await page.locator("#tf_description");
    await descriptionField.fill("Dummy Transaction");

    const transferSubmissionBtn = await page.locator("#btn_submit");
    await expect(transferSubmissionBtn).toBeEnabled();
    await expect(transferSubmissionBtn).toBeVisible();
    await transferSubmissionBtn.click();

    // await page.keyboard.press("Enter");

    await expect(fromAccount).toBeDisabled;
    await expect(toAccount).toBeDisabled;
    await expect(amountField).toBeDisabled;
    await expect(descriptionField).toBeDisabled;

    const confirmationBtn = await page.locator("#btn_submit");
    await confirmationBtn.click();

    const transactionSuccessfulMsg = await page.locator(
      "div.alert.alert-success"
    );
    await expect(transactionSuccessfulMsg).toBeVisible;
  });
});
