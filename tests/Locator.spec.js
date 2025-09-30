import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => { 

     await page.goto('https://www.demoblaze.com/index.html')   

     //await page.locator('locatorValue').click()         m(1)
     //await page.click('locatorValue')                    same as m(m1)

     //using id value
     await page.locator('id=login2').click()   // or await page.click('id=login2')
     //using css
     await page.locator('#loginusername').fill('Tarun')   // or await page.fill('#loginusername','Tarun')  or  await page.type('#loginusername','Tarun')
     //using css
     await page.locator("input[id='loginpassword']").fill('test@123')   // or await page.fill("input[id='loginpassword']",'test@123')  or  await page.type("input[id='loginpassword']",'12334')
     //using xpath
     await page.click("//button[contains(text(),'Log in')]")       

     const logoutLink=page.locator("//a[contains(text(),'Log out')]")
     await  expect(logoutLink).toBeVisible()

     await  page.close()

     //For fetching multiple element

      page.waitForSelector("common locator value")  // it will wait for elements to be visible
      
     const elements=await page.$$("common locator value");

     for(const e of elements){
         const elementText= await e .textContent()
         console.log(elementText)
     }
    });