import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dsourcelab%26oq%3Dsourcelab%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDY5NjVqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DOOeZaNmKK7mNseMPgYqeyA0&q=EhAkAUkAiKky8rWZBXhCGVfEGLnO58QGIjDCgZ7MjT1PYmdmAFlAq-6t1AmDH755ElNJtzsH9prp-f3hWD8lVwbntDZHq-xJeBgyAVJaAUM');
  await page.locator('iframe[name="a-pu0914hbybbv"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-pu0914hbybbv"]').contentFrame().locator('td:nth-child(2)').first().click();
  await page.locator('iframe[name="c-pu0914hbybbv"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(3)').click();
  await page.locator('iframe[name="c-pu0914hbybbv"]').contentFrame().locator('tr:nth-child(3) > td').first().click();
  await page.locator('iframe[name="c-pu0914hbybbv"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.locator('div:nth-child(2) > div').first().click();
  await page.locator('iframe[name="a-pu0914hbybbv"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page1.goto('https://www.youtube.com/');
  await page1.getByRole('combobox', { name: 'Search' }).click();
  await page1.getByRole('combobox', { name: 'Search' }).fill('automation step by step');
  await page1.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page1.getByRole('button', { name: 'Guide' }).click();
});