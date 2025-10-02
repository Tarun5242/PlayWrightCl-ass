import{test,expect} from '@playwright/test'

test('Handling the Table',async({page}) =>{


  await page.goto('https://testautomationpractice.blogspot.com/')
  const table=await page.locator("//table[@id='productTable']")

  const allColumn=await table.locator("//thead//tr//th")
  const numberOfColumn=await allColumn.count()

  const allRows=await table.locator("//tbody//tr")
  const numberOfRows=await allRows.count()

  const allPage=await page.locator("//ul[@id='pagination']//li")
  const pageNumber=await allPage.count()

  const allPageNum=await page.locator("//ul[@id='pagination']//li//a")
  /*
 // check the checkbox which is having price more than $15.00
  for(let p=1;p<pageNumber;p++){
    for(let r=1;r<numberOfRows;r++){
        const row=allRows.nth(r)
        const priceText=await row.locator("//td[3]").textContent()
        console.log(priceText)
        const price = parseFloat(priceText.replace('$', ''))
        console.log(price)
        if(price>15.00){
           await row.locator("//td[4]//input").check()
           await page.waitForTimeout(2000)
        }
       
    }
    await page.waitForTimeout(3000)
     const pageClick=await allPage.nth(p)
     await pageClick.locator("//a").click()
     
  }*/

  // Print all the products that is having more than 2 words in its name
  for(let p=1;p<pageNumber;p++){
    for(let r=0;r<numberOfRows;r++){
        const row=allRows.nth(r)
        const productName=await row.locator("//td[2]").textContent()
        console.log(productName)
        const wordLength=await productName.trim().split(" ").length
        if(wordLength>1){
           await row.locator("//td[4]//input").check()
           await page.waitForTimeout(2000)
        }
       
    }
    await page.waitForTimeout(3000)
     const pageClick=await allPage.nth(p)
     await pageClick.locator("//a").click()

}


  /*
  const table=page.locator("//table[@id='productTable']")

  const Columns=await table.locator('//thead//tr//th')
  console.log('No of columns  ', await Columns.count())


  const rows=await table.locator('//tbody//tr')
  console.log('No of columns  ', await rows.count())


  // select checkbox for product 4
    const checkbox=rows.filter({ 
       // has:page.locator('//td'),
        hasText:'$19.99'
    })
    await checkbox.locator('//input').click()

    await checkingMultiple(rows,'Smartphone')
    await checkingMultiple(rows,'$5.99')
    await checkingMultiple(rows,'Wireless Earbuds')
    await page.waitForTimeout(3000)


    const pageNumber=await page.locator('#pagination li a')
    console.log(await pageNumber.count())

    for(let p=1;p<await pageNumber.count();p++){
        for(let m=1;m<await rows.count();m++){
            const rowText=rows.nth(m)
            const columns=rowText.locator('//td')
            for(let j=0;j<await columns.count()-1;j++){
              console.log(await columns.nth(j).textContent())
           }
        }
    }*/

})
/*

async function checkingMultiple(rows,text){
    const checkbox1=rows.filter({ 
       // has:page.locator('//td'),
        hasText:text
    })
    await checkbox1.locator('//input').click()

}*/