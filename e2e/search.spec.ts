import { test, expect } from "@playwright/test";

test.describe("Navigate to web app security website", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com");
  });

  test("Should find search results", async ({ page }) => {
    const searchTxt = page.locator("#searchTerm");
    await searchTxt.type("banking");
    await page.keyboard.press("Enter");

    const searchResults = await page.locator("li a");
    await expect(searchResults).toHaveCount(2);
  });
});
