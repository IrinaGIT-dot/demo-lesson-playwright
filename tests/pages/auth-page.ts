import { BasePage } from './base-page'
import { Locator, Page } from '@playwright/test'

export class AuthPage extends BasePage {
  readonly statusButton: Locator
  readonly logoutButton: Locator
  readonly createPopUp: Locator
  readonly orderStatusInputField: Locator
  readonly orderStatusSubmitButton: Locator
  readonly orderPopUpCloseButton: Locator
  // add more locators here

  constructor(page: Page) {
    super (page)
    this.statusButton = this.page.getByTestId('openStatusPopup-button')
    this.logoutButton = this.page.getByTestId('logout-button')
    this.createPopUp = this.page.getByTestId('orderSuccessfullyCreated-popup')
    this.orderStatusInputField = this.page.getByTestId('searchOrder-input')
    this.orderStatusSubmitButton = this.page.getByTestId('searchOrder-submitButton')
    this.orderPopUpCloseButton = this.page.getByTestId('searchOrder-popup-close-button')
  }
}