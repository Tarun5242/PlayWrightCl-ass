import { test, expect } from '@playwright/test';
/*
async({page})=>{
    this is an annomous function 
    we are using async here because JavaScript is asyncronazied programming language. and inautomation testing test always depends on previous steps 
    so we need to run then syncronazied that's why we are using async and await keywords.
    asysm- function will give the promise to written 
    await-give to mromise to wait for a particular time
    }

*/
test('Navigate to the google and checking for title', async ({ page }) => {  //// page is feature in playwright which contains all the functions which can be used in automation
   
    await page.goto('https://www.demoblaze.com');

    const pageTitle=await page.title();
    console.log('Title of page',pageTitle);

    await expect(page).toHaveTitle('STORE');// assertion

    const pageUrl=page.url();
    console.log('URL of page',pageUrl);

    await expect(page).toHaveURL('https://www.demoblaze.com'); // assertion

     await page.close();


     /* commond line to run tests
       npx playwright test                                                                  runs all tests on all browsers in headless mode
       npx playwright test fileName.spec.js                                                 runs a specific file(m1)
       npx playwright test tests\fileName.spec.js                                           runs a specific file(m2)
       npx playwright test fileName.spec.js --project=chromium                              runs on a specific browser
       npx playwright test fileName.spec.js --project=chromium  --headed                    runs on a specific browser with headed
       npx playwright test fileName.spec.js --project=chromium  --headed --debuge           runs in debug mode on a specific browser with headed
     */

       });