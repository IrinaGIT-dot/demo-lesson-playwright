import { Locator, Page } from '@playwright/test'
import { AuthPage } from './auth-page'
import { OrderFoundPage } from './order-found'

export class OrderPage extends AuthPage{
  readonly orderCreatorName: Locator
  readonly orderCreatorPhone: Locator
  readonly orderCreatorComment: Locator
  readonly orderButton: Locator
  readonly creatorNameError: Locator
  readonly creatorPhoneError: Locator

  constructor(page: Page) {
    super (page)
    this.orderCreatorName = this.page.getByTestId('username-input')
    this.orderCreatorPhone = this.page.getByTestId('phone-input')
    this.orderCreatorComment = this.page.getByTestId('comment-input')
    this.orderButton = this.page.getByTestId('createOrder-button')
    this.creatorNameError = this.page.getByTestId('username-input-error')
    this.creatorPhoneError = this.page.getByTestId('phone-input-error')
  }

  async orderFoundPage() {
    return new OrderFoundPage(this.page)
  }
}
