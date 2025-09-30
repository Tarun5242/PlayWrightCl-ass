/*
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByPlaceholder() to locate an input by placeholder.
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.

page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).


await expect(locator).toBeVisible();
await expect(locator).toBeHidden();
await expect(locator).toBeAttached();
await expect(locator).toBeDetached();
await expect(locator).toBeEnabled();
await expect(locator).toBeDisabled();
await expect(locator).toBeEditable();
await expect(locator).toBeEmpty();
await expect(locator).toBeFocused();
await expect(locator).toBeChecked();
await expect(locator).toBeInViewport();

*/

import{test,expect} from '@playwright/test'

test('BuildIn_Locators',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const altAttributeLocator=await page.getByAltText('company-branding')   //
    await expect(altAttributeLocator).toBeVisible()
    await page.getByPlaceholder('Username').fill('Admin') 
    await page.getByPlaceholder('Password').fill('admin123') 
    await page.getByRole('button',{type: 'submit'})

    const name=await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    await expect(await page.getByText(name)).toBeVisible();




})