import { Locator, Page } from '@playwright/test'
import { AuthPage } from './auth-page'

export class OrderNotFound extends AuthPage{
  readonly notFoundTitle: Locator
  readonly notFoundPict: Locator
  readonly notFoundDescription: Locator

  constructor(page: Page) {
    super (page)
    this.notFoundTitle = this.page.getByRole('heading', { name: 'Order not found' })
    this.notFoundPict = this.page.locator('rect')
    this.notFoundDescription = this.page.getByText('Check the tracking code')
  }

}