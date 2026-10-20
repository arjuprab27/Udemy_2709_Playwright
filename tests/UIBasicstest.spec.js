const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  const email = process.env.EVENTHUB_EMAIL;
  const password = process.env.EVENTHUB_PASSWORD;

  if (!email || !password) {
    throw new Error('Set EVENTHUB_EMAIL and EVENTHUB_PASSWORD to run this test.');
  }

  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  await page.getByPlaceholder('you@email.com').fill(email);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com');
});