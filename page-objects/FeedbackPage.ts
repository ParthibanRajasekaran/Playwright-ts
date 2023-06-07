import { Expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class FeedbackPage extends BasePage {
  readonly nameField: Locator;
  readonly emailField: Locator;
  readonly subjectField: Locator;
  readonly commentField: Locator;
  readonly submitBtn: Locator;
  readonly clearBtn: Locator;
  readonly feedbackSubmissionTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.nameField = page.locator('input#name');
    this.emailField = page.locator('input#email');
    this.subjectField = page.locator('input#subject');
    this.commentField = page.locator('#comment');
    this.submitBtn = page.locator("input[type='submit']");
    this.clearBtn = page.locator("input[type='reset']");
    this.feedbackSubmissionTitle = page.locator('#feedback-title');
  }

  async fillFeedbackForm(
    name: string,
    email: string,
    subject: string,
    comment: string
  ) {
    await this.nameField.fill(name);
    await this.emailField.fill(email);
    await this.subjectField.fill(subject);
    await this.commentField.type(comment);
  }

  async submitFeedbackForm() {
    await this.submitBtn.click();
  }

  async clearFeedbackForm() {
    await this.clearBtn.click();
  }
}
