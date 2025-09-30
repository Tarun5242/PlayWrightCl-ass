import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('link', { name: 'Home', exact: true }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Tu yaad na aaye aesa koi din nhi song');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('button', { name: 'Guide' }).click();
  await page.locator('#scrim').click();
  await page.locator('ytd-video-renderer').filter({ hasText: ':20 4:20 Now playing तू याद ना आये [पूरा गाना] आप का सुरूर T-Series T-Series' }).locator('#thumbnail').dblclick();
  
});