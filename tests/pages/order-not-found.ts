import { BasePage } from './base-page'
import { Locator, Page } from '@playwright/test'

export class OrderNotFound extends BasePage{
  readonly statusButton: Locator
  readonly notFoundTitle: Locator
  readonly notFoundPict: Locator
  readonly notFoundDescription: Locator
  // add more locators here

  constructor(page: Page) {
    super (page)
    this.statusButton = this.page.getByTestId('openStatusPopup-button')
    this.notFoundTitle = this.page.getByRole('heading', { name: 'Order not found' })
    this.notFoundPict = this.page.locator('rect')
    this.notFoundDescription = this.page.getByText('Check the tracking code')
  }

}