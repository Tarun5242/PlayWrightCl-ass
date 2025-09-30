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
    
    


    
})