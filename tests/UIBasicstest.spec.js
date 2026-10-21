const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
 
  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  await page.getByPlaceholder('you@email.com').fill('AdminTestIVTL@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Eating@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com');
});