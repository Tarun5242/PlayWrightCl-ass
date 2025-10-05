import{test,expect} from '@playwright/test'

test('Home page test',async({page}) =>{
    //login
   await page.goto('https://www.demoblaze.com/index.html')
   await page.locator("//a[@id='login2']").click()
   await page.locator('#loginusername').fill('tarun7475')
   await page.locator('#loginpassword').fill('sirvi')
   await page.locator("//button[normalize-space()='Log in']").click()
   await page.waitForTimeout(3000)
    //home page
    const totalProduct=await page.locator("//div[@id='tbodyid']/div").count()
    await expect(totalProduct).toBe(9)
    await expect(await page.$$("//div[@id='tbodyid']/div")).toHaveLength(9)

    //logout
   await page.locator("//a[@id='logout2']").click()

})


test('Add product to cart',async({page}) =>{
   //Login
   await page.goto('https://www.demoblaze.com/index.html')
   await page.locator("//a[@id='login2']").click()
   await page.locator('#loginusername').fill('tarun7475')
   await page.locator('#loginpassword').fill('sirvi')
   await page.locator("//button[normalize-space()='Log in']").click()
   await page.waitForTimeout(3000)

   //addto cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.waitForTimeout(2000)
    await page.locator("//a[normalize-space()='Add to cart']").click()
    await page.waitForTimeout(2000)
    page.on('dialog', async dialog => {
            expect(dialog.message()).toContain('Product added.')
            await dialog.accept()
            //await dialog.dismiss()
        })

   // logout
   await page.locator("//a[@id='logout2']").click()

})