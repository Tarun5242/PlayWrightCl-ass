import{test,expect} from '@playwright/test'
/*
async({page})=>{
    this is an annomous function 
    we are using async here because JavaScript is asyncronazied programming language. and inautomation testing test always depends on previous steps 
    so we need to run then syncronazied that's why we are using async and await keywords.
    asysm- function will give the promise to written 
    await-give to mromise to wait for a particular time
    }

*/
/* commond line to run tests
       npx playwright test                                                                  runs all tests on all browsers in headless mode
       npx playwright test fileName.spec.js                                                 runs a specific file(m1)
       npx playwright test tests\fileName.spec.js                                           runs a specific file(m2)
       npx playwright test fileName.spec.js --project=chromium                              runs on a specific browser
       npx playwright test fileName.spec.js --project=chromium  --headed                    runs on a specific browser with headed
       npx playwright test fileName.spec.js --project=chromium  --headed --debuge           runs in debug mode on a specific browser with headed
       npx platywright codegen                                                              helps us to generate the code automatically
       npx platywright codegen -o tests/CodeGen3.spec.js                                    Create a file and write the code in it ( -o means  --output)                                                 
       


       /*
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByPlaceholder() to locate an input by placeholder.
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.

page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

await expect(page).toHaveURL("Give URL")
await expect(page).toHaveTitle("Give UTitleRL")
await expect(locator).toBeVisible();
await expect(locator).toHaveText("Enter Text");
await expect(locator).toContainText("Enter some portion of the text");
await expect(locator).toHaveValue("Enterr same value which we have given in input filed and cross checking it"));
await expect(locator).toHaveCount();   // give you total count , ex- in the drop down there are 6 options then it will give 6
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

Negative scenarios
await expecet(page).not.toHaveUrl("Give URL")
await expecet(page).not.toHaveTitle("Give UTitleRL")
await expect(locator).not.toBeVisible();
await expect(locator).not.toHaveText("Enter Text");
await expect(locator).not.toContainText("Enter some portion of the text");
await expect(locator).not.toHaveValue("Enterr same value which we have given in input filed and cross checking it"));
await expect(locator).not.toBeHidden();
await expect(locator).not.toBeAttached();
await expect(locator).not.toBeDetached();
await expect(locator).not.toBeEnabled();
await expect(locator).not.toBeDisabled();
await expect(locator).not.toBeEditable();
await expect(locator).not.toBeEmpty();
await expect(locator).not.toBeFocused();
await expect(locator).not.toBeChecked();
await expect(locator).not.toBeInViewport();

*/


test("Practice",async({page})=> {

// opening the URL
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

// Matching the Url and Title

    const pageTtile=await page.title()  //  similiar to driver.getTitle(); // promise to return a String
    const pageURL=await page.url()     //  similiar to driver.getCurrentUrl();  // promise to return a String
    await expect(pageTtile).toBe("OrangeHRM")
    await expect(pageURL).toBe("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//Matching directly without storing it in a variable

    await expect(page).toHaveTitle("OrangeHRM")     //  page inside expect, directly from the driver 
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

// Checking whether Element is visible or not
     const element=page.locator("//h5[normalize-space()='Login']")
     await expect(element).toBeVisible()

// Matching whether the text present on UI is same or not

     const element1=page.locator("//p[normalize-space()='Username : Admin']")
    //M-1
     await expect(await element1.textContent()).toBe("Username : Admin")

     //M-2
     const actualText = await element1.textContent(); // promise to return a String
     await expect(actualText).toBe("Username : Admin");

     //M-3
     await expect(await page.locator("//p[normalize-space()='Username : Admin']").textContent() ).toBe("Username : Admin")

     //M-4 - Use this always
    await expect(element1).toHaveText("Username : Admin")   // do not use  await inside the expect block because we are not using any method with element

// Entering the data in the input field.

    const element2=page.getByPlaceholder("Username")
    const element3=page.getByPlaceholder("Password")
    //M-1
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Username").clear()

    //M-2
    await element2.fill('Admin')
    await element3.fill('admin123')

// Clicking on the button

   const element4=page.getByRole('button',{type: 'submit'})

   //M-1
   //await page.getByRole('button',{type: 'submit'}).click()

   //M-2
   await element4.click()

 // Verifying whether the text is present on UI or not

     const element5=await page.locator("//p[@class='oxd-userdropdown-name']").textContent()
    await expect(await page.getByText(element5)).toBeVisible()
   
   
// Capturing multiple element and then fatching them

    const elements=await page.$$("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name']")   // Here await is nessuary

     for(const e of elements){
         const elementText= await e.textContent()
         if(elementText.trim() === "Directory"){
           console.log(elementText)
           break 
         }


// Actions on keyboard buttons

        //M-1
         const element6= page.getByRole('combobox', { name: 'Search' })
         await element6.press('Enter') 

         //M-2
         await page.getByRole('combobox', { name: 'Search' }).press('Enter');

 // Waits

        await page.waitForTimeout(5000)
        await page.waitForSelector('locator value')
        
//Handing radio button
       const radiobutton1= page.locator("Locator value for male ")   
       const radiobutton2= page.locator("Locator value for Fermale")   
       //m-1
       await page.locator("Locator value").check()
      
       //m-2
       await radiobutton1.check()

       //m-3
       await page.check("Locator value")

       //Assertion on radio button
       //checking Male radio button is checked or selected

       //m-1
       await expect(radiobutton1).toBeChecked()
       //m-2
       await expect(await radiobutton1.isChecked()).toBeTruthy()

       //checking Female radio button is not checked or selected
       await expect(await radiobutton2.isChecked()).toBeFalsy()

// Handling the checkboxes

       //Single checkbox
       //m-1
       const CheckBoxLocator=page.locator("locator value of checked checkbox")
       const CheckBoxLocator2=page.locator("locator value of unchecked checkbox") 
       await CheckBoxLocator.click()
       //m-2
       await page.locator("locator value of checked checkbox").check();
       //m-3
       await page.check("locator value of checked checkbox")
       
       //Assertion on checkbox
       //m-1
       await expect(CheckBoxLocator).toBeChecked()

       //m-2
       await expect(await CheckBoxLocator.isChecked()).toBeTruthy()
       await expect(await CheckBoxLocator.isChecked()).toBeFalsy()

       //Multiple checkbox needs to be selected
       const checkboxLocators=[
            "locator value of first checked checkbox",
            "locator value of second checked checkbox",
            "locator value of third checked checkbox"
       ]
       //Selecting multiple checkboxes
       for(const loc of checkboxLocators){
            await page.locator(loc).check()
       }
       //unselecting the preselected checkboxes
       for(const loc of checkboxLocators){
           if(await page.locator(loc).isChecked()) {
            await page.locator(loc).uncheck()
           }
       }
    


// Handling the Drop downs

      //use applicatiopn- https://testautomationpractice.blogspot.com/

      //M-1 By using label
      await page.locator("Locator of the drop down where all locators are available").selectOption({label:'India'})

      // M-2 Directly
       await page.locator("Locator of the drop down where all locators are available").selectOption('India')

      //M-3 if value and text are same in HTML path
       await page.locator("Locator of the drop down where all locators are available").selectOption({value:'india'})

      //M-4 using index
      await page.locator("Locator of the drop down where all locators are available").selectOption({index:3})

      //M-5 Directly using selectOption
      await page.selectOption("Locator of the drop down where all locators are available",'India')

      //Assertion on drop down
      // Check number of options in drop down
      //M-1
      const options=page.locator('Locator of the drop down where all locators are available ')  
      await expect(options).toHaveCount(10)
      //M-2
     const optionss=await page.$$('Locator of the drop down where all locators are available ')  // with the use $$ we are storing al the options in a array
     console.log("total number of options: ", optionss.length)
     await expect(optionss.length).toBe(10)

     //To checking presence of value in drop down
     //m-1
     const content=await page.locator('Main drop dwon locator').textContent()
     await expect(content.includes('India')).toBeTruthy()
     //m-2
     const options1=page.$$('Locator of the drop down where all locators are available option') 
     let status = false;
     for(const option of options1){
        //console.log(await option.textContent())
        let value=await option.textContent()
        if(value.includes('India')){
            status=true;
            break;
        }
     }
     await expect(status).toBeTruthy()

// Handing multiple drop down ( User can  sel;ect more than one option in the drop down)  
   //use applicatiopn- https://testautomationpractice.blogspot.com/

     await page.selectOption("Locator of the drop down where all locators are available",['dropdown1' , 'dropdown2', 'dropdown5'])


     //Assertions
     const Multioptions=page.locator('Locator of the drop down where all locators are available ')  
      await expect(Multioptions).toHaveCount(10)


      const Multioptionss=await page.$$('Locator of the drop down where all locators are available ')  // with the use $$ we are storing al the options in a array
     console.log("total number of options: ", Multioptionss.length)
     await expect(Multioptionss.length).toBe(10)

     const Multicontent=await page.locator('Locator of the drop down where all locators are available').textContent()
     await expect(await Multicontent.includes('India')).toBeTruthy()

//Auto suggestion drop down

     //URL- https://www.redbus.in/


// handling hidden items in the drop down
     //use when drop down options are disappering within microseconds 
     //In this case we can not find locator manually so we need to turn on debugger 
     //Then click on Drop down and it will pause the screen then we can find the locators manually

//How to Handle Dialogs Or Alerts | alert()
    // usually all type of alert , dialogs are handling by default by Playwright but if we still want to handle then
     page.on('dialog',async dialog=>{
      expect(dialog.type()).toContain('alert')
      expect(dialog.message()).toContain('I am an alert box')
      await dialog.accept()
     })
  
     await page.locator('alert button locator').click()
     await page.waitForTimeout(3000)

//How to Handle ConfirmBox | confirm()

     page.on('dialog',async dialog=>{
      expect(dialog.type()).toContain('confirm')
      expect(dialog.message()).toContain('Press a button')
      await dialog.accept()
      //await dialog.dismiss()
     })
  
     await page.locator('confirm box button locator').click()
     await page.waitForTimeout(3000)

//How to Handle prompt | prompt()

     page.on('dialog',async dialog=>{
      expect(dialog.type()).toContain('prompt')
      expect(dialog.message()).toContain('Please enter your name:')
      expect(dialog.defaultValue).toContain('Default Value gives here')
      await dialog.accept('Tarun sirvi')
      //await dialog.dismiss()
     })
  
     await page.locator('confirm box button locator').click()
     await page.waitForTimeout(3000)     


//How to handle to frame/iframe
// use url=//https://ui.vision/demo/webtest/frames/
     // total frames
       const totalFrames=await page.frames()   //storing all frames in an array  
            console.log("Total number of frames :", totalFrames.length)

     // Approach 1 with name and url
     const frame1=await page.frame('Type name here')  // use when name is present
     const frame2= await page.frame({url:'type url here from the src attribute'})  // just right click on the url of src and then copy link address       
     await frame2.fill("locator value of input field inside the Frame", ' Type value here')

     // Approach -2 with Frame Locator
     const inputfield=await page.frameLocator("locator value of Frame").locator("locator value of input field inside the Frame")
    await inputfield.fill(" Type value here")

    //nasted frame
    const parentFrame=await page.frame({url:'type url here from the src attribute'})
    const childFrame=await parentFrame.childFrames()   //storing all frames in an array 
    await childFrame[0].locator("locator value of any field").check()  // here we are clicking on the radio button inside the child frame
     }


})
