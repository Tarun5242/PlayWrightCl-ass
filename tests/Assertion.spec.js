import{test,expect} from '@playwright/test';

/*
await expecet(page).toHaveUrl("Give URL")
await expecet(page).toHaveTitle("Give UTitleRL")
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
test('Assertion Practice',async({page})=>{
  await page.goto("https://demo.nopcommerce.com/register")


// hard Assertion
await expect(page).toHaveURL("https://demo.nopcommerce.com/register")
await expect(page).toHaveTitle("nopCommerce demo store. Register")

// Soft Assertion
await expect.soft(page).toHaveURL("https://demo.nopcommerce.com/register ...fwefer")
await expect.soft(page).toHaveTitle("nopCommerce demo store. Register Wrong value")

const locator=page.locator("//input[@id='small-searchterms']")
await expect(locator).toBeVisible();

const locator1=page.locator("//div[@class='page-title']//h1")
await expect(locator1).toHaveText("Register");

const locator2=page.locator("//strong[normalize-space()='Your Personal Details']")
await expect(locator2).toContainText("Details");

await expect(locator).toBeEmpty();
await locator.fill("Tarun Sirvi")
await expect(locator).toHaveValue("Tarun Sirvi")
await expect(locator).toBeEditable();


const loc=page.locator("//input[@id='gender-male']")
await loc.click()
await expect(loc).toBeChecked();
/*
await expect(locator).toBeEnabled();
await expect(locator).toHaveCount();   // give you total count , ex- in the drop down there are 6 options then it will give 6
await expect(locator).toBeHidden();
await expect(locator).toBeAttached();
await expect(locator).toBeDetached();

await expect(locator).toBeDisabled();
await expect(locator).toBeEditable();
await expect(locator).toBeEmpty();
await expect(locator).toBeFocused();
await expect(locator).toBeChecked();
await expect(locator).toBeInViewport();*/


})


