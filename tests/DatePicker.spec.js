import{test,expect} from '@playwright/test'

test('Handling the Table',async({page}) =>{

await page.goto('https://testautomationpractice.blogspot.com/')  

const year="2026"
const month="March"
const date="13"

await page.locator('#datepicker').click()
  

//M-1
/*
while(true){
const presentMonth=await page.locator('.ui-datepicker-month').textContent()
const presentYear=await page.locator('.ui-datepicker-year').textContent()

if(presentMonth==month && presentYear==year){
    const row=await page.locator("//table[@class='ui-datepicker-calendar']//tbody//tr")
    const tableLength=await page.locator("//table[@class='ui-datepicker-calendar']//tbody//tr").count()
    const columnlength=await page.locator("//table[@class='ui-datepicker-calendar']//thead//tr//th").count()
    await page.waitForTimeout(5000)
    for(let r=0;r<tableLength;r++){
        const rowNum=row.nth(r)
        const columnNum=rowNum.locator('//td//a')
        for(let c=0;c<columnlength;c++){
            const selectableDate=await columnNum.nth(c).textContent()
            if(selectableDate==date){
                await columnNum.nth(c).click()
                await page.waitForTimeout(5000)
                break
            }
            
        }
    }
  
}
else  await page.locator("//span[contains(text(),'Next')]").click() */



// method 2
while(true){
const presentMonth=await page.locator('.ui-datepicker-month').textContent()
const presentYear=await page.locator('.ui-datepicker-year').textContent()

if(presentMonth==month && presentYear==year){
    break
}
  else  await page.locator("//span[contains(text(),'Next')]").click()

}

const dates= await page.$$("//a[@class='ui-state-default']")
for(const dt of dates){
    if(await dt.textContent()==date){
        dt.click();
         await page.waitForTimeout(5000)
        break
    }
}













})
