import { test, expect } from '@playwright/test';
import { HomePage } from '../../page-objects/HomePage';
import { PaymentsPage } from '../../page-objects/PaymentsPage';
import { LoginPage } from '../../page-objects/LoginPage';

test.describe('Navigate to web app security website', async () => {
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

  test('Invalid login and submit payment', async () => {
    await playAudit({
      page: page,
      thresholds: {
        seo: 70,      },
      port: 9222,
reports: {
    formats: {
      json: true, //defaults to false
      html: true, //defaults to false
      csv: true, //defaults to false
    },
    name: `name-of-the-report`, //defaults to `lighthouse-${new Date().getTime()}`
    directory: `path/to/directory`, //defaults to `${process.cwd()}/lighthouse`
  }

    });
  });
});
