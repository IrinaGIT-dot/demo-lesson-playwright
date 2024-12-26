import { BasePage } from './base-page'
import { Locator, Page } from '@playwright/test'

export class AuthPage extends BasePage {
  readonly statusButton: Locator
  readonly logoutButton: Locator
  readonly createPopUp: Locator
  readonly statusInputField: Locator
  readonly statusSubmitButton: Locator
  readonly popUpCloseButton: Locator

  constructor(page: Page) {
    super (page)
    this.statusButton = this.page.getByTestId('openStatusPopup-button')
    this.logoutButton = this.page.getByTestId('logout-button')
    this.createPopUp = this.page.getByTestId('orderSuccessfullyCreated-popup')
    this.statusInputField = this.page.getByTestId('searchOrder-input')
    this.statusSubmitButton = this.page.getByTestId('searchOrder-submitButton')
    this.popUpCloseButton = this.page.getByTestId('searchOrder-popup-close-button')
  }
}