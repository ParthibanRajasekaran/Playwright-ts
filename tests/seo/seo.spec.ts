import { playAudit } from 'playwright-lighthouse'
import { test, chromium } from '@playwright/test';

test.describe.skip('audit example', () => {
    test('open browser', async () => {
    const browser = await chromium.launch({
      args: ['--remote-debugging-port=9222'],
    });
    const page = await browser.newPage();
    await page.goto('https://angular.io/');

    await playAudit({
      page: page,
      thresholds: {
        seo: 50,
      },
      port: 9222,

      reports: {
        formats: {
          json: true, //defaults to false
          html: true, //defaults to false
          csv: true, //defaults to false
        },
        name: `seo-score`, //defaults to `lighthouse-${new Date().getTime()}`
        directory: `seo-report`, //defaults to `${process.cwd()}/lighthouse`
      },
    });

    

    await browser.close();
  });
});