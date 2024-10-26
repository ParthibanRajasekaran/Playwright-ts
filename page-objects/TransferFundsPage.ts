import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class TransferFundsPage extends BasePage {
  readonly accountSummaryTab: Locator;
  readonly fromAccount: Locator;
  readonly toAccount: Locator;
  readonly amountField: Locator;
  readonly descriptionField: Locator;
  readonly transferSubmissionBtn: Locator;
  readonly confirmationBtn: Locator;
  readonly transactionSuccessfulMsg: Locator;

  constructor(page: Page) {
    super(page);
    this.accountSummaryTab = page.locator('#account_summary_tab');
    this.fromAccount = page.locator('#tf_fromAccountId');
    this.toAccount = page.locator('#tf_toAccountId');
    this.amountField = page.locator('#tf_amount');
    this.descriptionField = page.locator('#tf_description');
    this.transferSubmissionBtn = page.locator('#btn_submit');
    this.confirmationBtn = page.locator('#btn_submit');
    this.transactionSuccessfulMsg = page.locator('div.alert.alert-success');
  }

  async visit() {
    if (!this.page.isClosed()) {
      try {
        await this.page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html', { waitUntil: 'domcontentloaded' });
        await expect(this.page).toHaveURL(/transfer-funds\.html/);
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(`Navigation to Transfer Funds page failed: ${error.message}`);
        } else {
          throw new Error('Navigation to Transfer Funds page failed due to an unknown error.');
        }
      }
    } else {
      throw new Error('Page is closed. Cannot navigate.');
    }
  }
  
  

  async selectFromAccount(option: string) {
    await this.fromAccount.selectOption(option);
  }

  async selectToAccount(option: string) {
    await this.toAccount.selectOption(option);
  }

  async enterAmount(amount: string) {
    await this.amountField.fill(amount);
  }

  async enterDescription(description: string) {
    await this.descriptionField.fill(description);
  }

  async submitTransfer() {
    await this.transferSubmissionBtn.click();
  }

  async confirmTransfer() {
    await this.confirmationBtn.click();
  }

  async isTransferSuccessful() {
    return this.transactionSuccessfulMsg.isVisible();
  }
}
