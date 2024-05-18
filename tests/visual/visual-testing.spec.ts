import { Browser, Page, chromium, test, expect } from '@playwright/test';

let browser: Browser;
let page: Page;

test.beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto('https://www.google.co.uk/');
    await page.locator("button[id='W0wltc']").click();
});
  
test.afterAll(async () => {
    await browser.close();
});
  

test.skip('Visual regression test for Google UK', async () => {
  
  // **Basic Usage**
  // Capture a screenshot of the entire page and compare it with a baseline image named 'baseline.png'.
  await expect(page).toHaveScreenshot('baseline.png');

  // Capture a screenshot of just the Google search bar.
  await expect(page.locator("textarea[name='q']")).toHaveScreenshot('search_bar.png');

  // **Disabling Animations**
  // Ensure that the visual state of the application is static and predictable by disabling animations.
  await expect(page).toHaveScreenshot('no_animations.png', {
    animations: 'disabled'
  });

  // **Hiding the Text Caret**
  // Ensure consistency in input fields by hiding the blinking caret.
  await expect(page.locator("textarea[name='q']")).toHaveScreenshot('no_caret.png', {
    caret: 'hide'
  });

  // **Clipping a Specific Area**
  // Capture a defined area of the page, useful for focusing on specific sections.
  await expect(page).toHaveScreenshot('clipped.png', {
    clip: {
      x: 10,
      y: 10,
      width: 100,
      height: 100
    }
  });

  // **Capturing the Full Page**
  // Test the entire scrollable page, beyond just the viewport.
  await expect(page).toHaveScreenshot('full_page.png', {
    fullPage: true
  });

  // **Masking Specific Elements**
  // Overlay dynamic content with a color for consistency.
  await expect(page).toHaveScreenshot('masked.png', {
    mask: [page.locator('.some-element')]
  });

  // **Changing the Mask Color**
  // Customize the mask color for visual clarity.
  await expect(page.locator("textarea[name='q']")).toHaveScreenshot('green_mask.png', {
    mask: [page.locator('.some-element')],
    maskColor: '#00FF00'
  });

  // **Omitting the Background**
  // Capture elements with transparency without the background.
  await expect(page.locator("textarea[name='q']")).toHaveScreenshot('transparent.png', {
    omitBackground: true
  });

  // **Setting the Scale**
  // Control the pixel scale for consistency across devices.
  await expect(page).toHaveScreenshot('css_scale.png', {
    scale: 'css'
  });

  // **Setting a Threshold for Color Difference**
  // Allow a certain percentage of pixel difference between the baseline and the current screenshot.
  await expect(page.locator("textarea[name='q']")).toHaveScreenshot('threshold.png', {
    threshold: 0.1
  });

  // **Setting a Timeout**
  // Ensure the screenshot is taken once the content is stable, especially for dynamic content.
  await expect(page).toHaveScreenshot('with_timeout.png', {
    timeout: 5000
  });
});
