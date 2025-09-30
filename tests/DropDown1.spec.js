import{test,expect} from '@playwright/test';

test("Drop down practice",async({page})=> {


    await page.goto('https://testautomationpractice.blogspot.com/')

    const options=page.locator("//select[@id='country']")
    //await page.locator("//select[@id='country']").selectOption({value:'india'})
    //await options.selectOption('India')
    await page.locator("//select[@id='country']").selectOption({index:3})
    await page.waitForTimeout(5000)
    await expect(options.isChecked).toBeTruthy()

    const optionsCount=page.locator("//select[@id='country']//option") 
    //await expect(optionsCount).toHaveCount(10)

    const optionsCount2=await page.$$("//select[@id='country']//option") 
     console.log("total number of options: ", optionsCount2.length)
     await expect(optionsCount2.length).toBe(10)

   const content = await page.locator("//select[@id='country']").textContent()
    await expect(content.includes('India')).toBeTruthy();


    //
    
    await page.goto('https://www.redbus.in/')


    await page.locator("//input[contains(@class,'inputField') and @id='srcDest']").fill('Jaipur')

    await page.waitForTimeout(5000)

    await expect(page.locator("//div[contains(@aria-label,'Jaipur (Rajasthan),')]")).toBeVisible()
    // Use for a Locator
     await page.waitForSelector("//div[contains(@aria-label,'Jaipur (Rajasthan),')]")
    const optionsUnderCity=page.$$("//div[contains(@aria-label,'Jaipur (Rajasthan),')]")
    for(let option of optionsUnderCity){
        PlaceName=await option.textContent()
        console.log(PlaceName)
        if(PlaceName.includes('Sindhi Camp, Jaipur (Rajasthan)')){
            await option.click()
            break
        }
    }
    
})