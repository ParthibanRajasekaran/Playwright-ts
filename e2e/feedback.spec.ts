import { test, expect } from "@playwright/test";

test.describe("Navigate to web app security website", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com");
  });

  test("Fill in feedback form", async ({ page }) => {
    const feedbackTab = await page.locator("li#feedback");

    await feedbackTab.click();

    const nameField = await page.locator("input#name");
    await nameField.fill("sample name");

    const emailField = await page.locator("input#email");
    await emailField.fill("sample@email.com");

    const subjectField = await page.locator("input#subject");
    await subjectField.fill("sample subject");

    const feedbackForm = await page.locator("#comment");
    await feedbackForm.type("sample contents are being entered here");

    const submitBtn = await page.locator("input[type='submit']");
    await submitBtn.click();

    const feebackSubmissionTitle = await page.locator("#feedback-title");
    await expect(feebackSubmissionTitle).toBeVisible;
  });

  test("Clear feedback form", async ({ page }) => {
    const feedbackTab = await page.locator("li#feedback");

    await feedbackTab.click();

    const nameField = await page.locator("input#name");
    await nameField.fill("sample name");

    const emailField = await page.locator("input#email");
    await emailField.fill("sample@email.com");

    const subjectField = await page.locator("input#subject");
    await subjectField.fill("sample subject");

    const feedbackForm = await page.locator("#comment");
    await feedbackForm.type("sample contents are being entered here");

    const clearBtn = await page.locator("input[type='reset']");
    await clearBtn.click();

    await expect(nameField).toBeEmpty;
    await expect(emailField).toBeEmpty;
    await expect(subjectField).toBeEmpty;
    await expect(feedbackForm).toBeEmpty;
  });
});
