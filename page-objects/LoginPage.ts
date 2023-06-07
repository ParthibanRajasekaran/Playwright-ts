import { Expect, Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.locator('#user_login');
        this.passwordInput = page.locator('#user_password');
        this.submitButton = page.locator("input[name='submit']");
        this.errorMessage = page.locator('.alert-error');
    }

    async visit() {
        await this.page.goto("http://zero.webappsecurity.com");
    }

    async signIn(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }

    async getErrorMessage() {
        return this.errorMessage.textContent();
    }
}
