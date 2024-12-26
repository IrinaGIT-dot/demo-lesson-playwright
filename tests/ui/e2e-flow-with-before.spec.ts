import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login-page'
import { faker } from '@faker-js/faker/locale/ar'
import { PASSWORD, USERNAME } from '../../config/env-data'
import { OrderFoundPage } from '../pages/order-found'

let authPage: LoginPage

test.beforeEach(async ({ page }) => {
  authPage = new LoginPage(page)
  await authPage.open()
})

test('signIn button disabled when incorrect data inserted', async ({}) => {
  await authPage.usernameField.fill(faker.lorem.word(2))
  await authPage.passwordField.fill(faker.lorem.word(7))
  await expect(authPage.signInButton).toBeDisabled()
})

test('error message displayed when incorrect credentials used', async ({}) => {
  await authPage.usernameField.fill('irina')
  await authPage.passwordField.fill('krglrftuyue')
  await authPage.signInButton.click({ force: true })
  await expect.soft(authPage.incCredentialsPopUp).toBeVisible()
})

test('login with correct credentials and verify order creation page', async ({}) => {
  const orderCreationPage = await authPage.signIn(USERNAME, PASSWORD)
  await expect.soft(orderCreationPage.statusButton).toBeVisible()
  await expect.soft(orderCreationPage.orderButton).toBeVisible()
  await expect.soft(orderCreationPage.orderCreatorName).toBeVisible()
  await expect.soft(orderCreationPage.orderCreatorPhone).toBeVisible()
  await expect.soft(orderCreationPage.orderCreatorComment).toBeVisible()
  await expect.soft(orderCreationPage.logoutButton).toBeVisible()
})

test('login and create order', async ({}) => {
  const orderCreationPage = await authPage.signIn(USERNAME, PASSWORD)
  await orderCreationPage.orderCreatorName.fill(faker.lorem.word(2))
  await orderCreationPage.orderCreatorPhone.fill(faker.lorem.lines(6))
  await orderCreationPage.orderCreatorComment.fill(faker.lorem.word(10))
  await orderCreationPage.orderButton.click()
  await expect.soft(orderCreationPage.createPopUp).toBeVisible()
})

test ('Logout', async ({}) => {
  const orderCreationPage = await authPage.signIn(USERNAME, PASSWORD)
  await expect.soft(orderCreationPage.logoutButton).toBeVisible()
  await orderCreationPage.logoutButton.click()
  await expect.soft(authPage.signInButton).toBeVisible()
  })

test('Errors when incorrect name and phone number are used', async ({}) => {
  const orderCreationPage = await authPage.signIn(USERNAME, PASSWORD)
  await orderCreationPage.orderCreatorName.fill('i')
  await expect.soft(orderCreationPage.creatorNameError).toHaveText("The field must contain at least of characters: 2")
  await orderCreationPage.orderCreatorPhone.fill('66666')
  await expect.soft(orderCreationPage.creatorPhoneError).toHaveText('The field must contain at least of characters: 6')
})

test('Login, create order and show order status', async ({ page }) => {
  const orderCreationPage = await authPage.signIn(USERNAME, PASSWORD)
  await orderCreationPage.statusButton.click()
  await orderCreationPage.statusInputField.fill('1941')
  await orderCreationPage.statusSubmitButton.click()
  const orderFoundPage =  new OrderFoundPage(page)
  await expect.soft(orderFoundPage.statusButton).toBeVisible()
})
