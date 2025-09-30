import { test, expect } from '@playwright/test'

test('Code generator testing ', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('automation step by step');
  await page.locator('div').filter({ hasText: /^automation step by step$/ }).first().click();
  await page.getByRole('link', { name: 'Playwright Beginner Tutorials' }).click();
  await page.getByRole('button', { name: 'Guide' }).click();
});