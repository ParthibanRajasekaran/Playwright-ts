import { Expect, Locator, Page } from "@playwright/test";

export class TransferFundsPage {
    // Define selectors
    readonly page: Page

    readonly accountSummaryTab: Locator


    // Init selector using constructors
    constructor(page: Page){
        this.page = page
        
        this.accountSummaryTab = page.locator("#account_summary_tab")
    }

    // Define login page methods
    async visit(){
        await this.page.goto("http://zero.webappsecurity.com/bank/transfer-funds.html");
    }
}