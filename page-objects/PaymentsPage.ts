import { Expect, Locator, Page } from "@playwright/test";

export class PaymentsPage {
    readonly page: Page;
    readonly payeeList: Locator;
    readonly accountList: Locator;
    readonly amountField: Locator;
    readonly datePicker: Locator;
    readonly descriptionField: Locator;
    readonly payAmountBtn: Locator;
    readonly paymentNotification: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.payeeList = page.locator("#sp_payee");
        this.accountList = page.locator("#sp_account");
        this.amountField = page.locator("#sp_amount");
        this.datePicker = page.locator("#sp_date");
        this.descriptionField = page.locator("#sp_description");
        this.payAmountBtn = page.locator("#pay_saved_payees");
        this.paymentNotification = page.locator("div.alert-success");
        this.successMessage = page.locator("#alert_content span");
    }
    
    async visit() {
        try {
          await this.page.goto("http://zero.webappsecurity.com/bank/pay-bills.html");
        } catch (error) {
          // Handle the "Navigation interrupted by another one" error
          console.error(`Error occurred during navigation: ${error}`);
          console.log("Retrying navigation...");
      
          // Wait for a short delay before retrying the navigation
          await this.page.waitForTimeout(1000);
      
          // Call the visit() method again to retry the navigation
          await this.visit();
        }
      }      
        
    async selectPayee(payee: string) {
        // Logic to select the payee from the dropdown
        await this.payeeList.selectOption(payee);
    }

    async selectAccount(account: string) {
        // Logic to select the account from the dropdown
        await this.accountList.selectOption(account);
    }

    async enterAmount(amount: string) {
        await this.amountField.type(amount);
    }

    async enterDate(date: string) {
        await this.datePicker.fill(date);
    }

    async enterDescription(description: string) {
        await this.descriptionField.fill(description);
    }

    async submitPayment() {
        await this.payAmountBtn.click();
    }
}
