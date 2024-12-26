import { BasePage } from './base-page'
import { Locator, Page } from '@playwright/test'

export class OrderFoundPage extends BasePage{
  readonly statusButton: Locator
  readonly textField: Locator
  readonly nameField: Locator

  constructor(page: Page) {
    super(page)
    this.statusButton = this.page.getByTestId('openStatusPopup-button')
    this.textField = this.page.getByTestId('useless-input')
    this.nameField = this.page.getByRole('heading', { name: 'Name' })
  }
}