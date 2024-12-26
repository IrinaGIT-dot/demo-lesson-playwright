import { Locator, Page } from '@playwright/test'
import { AuthPage } from './auth-page'

export class OrderFoundPage extends AuthPage{
  readonly textField: Locator
  readonly nameField: Locator

  constructor(page: Page) {
    super(page)
    this.textField = this.page.getByTestId('useless-input')
    this.nameField = this.page.getByRole('heading', { name: 'Name' })
  }
}