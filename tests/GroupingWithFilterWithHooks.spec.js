import { test, expect } from '@playwright/test'
test.beforeAll(async()=>{
  //logout
   console.log('Before All')
})
test.afterAll(async()=>{
  //logout
   console.log('After All')
})
test.beforeEach(async()=>{
  //logout
   console.log('Before Each')
})
test.afterEach(async()=>{
  //logout
   console.log('After Each')
})
test.describe.only('Group 1', () => {

    test('Grouping the tests', async ({ page }) => {
        console.log('test 1')
    })

    test('Grouping the tests 2', async ({ page }) => {
        console.log('test 2')
    })
})

test.describe('Group 2', () => {

    test('Grouping the tests 3', async ({ page }) => {
        console.log('test 3')
    })

    test('Grouping the tests 4', async ({ page }) => {
        console.log('test 4')
    })
})



