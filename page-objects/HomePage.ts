import { Expect, Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page
    readonly signInBtn: Locator
    readonly feedbackTab: Locator
    readonly searchBar: Locator

    constructor(page: Page){
        this.page = page
        this.signInBtn = page.locator("#signin_button");
        this.feedbackTab = page.locator("li#feedback");
        this.searchBar = page.locator("#searchTerm");
    }

    async visit(){
        await this.page.goto("http://zero.webappsecurity.com")
    }

    async searchForTerm(term: string) {
        await this.searchBar.type(term);
        await this.page.keyboard.press("Enter");
      }
}