import { Expect, Locator, Page } from "@playwright/test";

export class HomePage {
    // Define selectors
    readonly page: Page

    readonly signInBtn: Locator


    // Init selector using constructors
    constructor(page: Page){
        this.page = page

        this.signInBtn = page.locator("#signin_button");
    }

    // Define login page methods
    async visit(){
        await this.page.goto("http://zero.webappsecurity.com");
    }
}