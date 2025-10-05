import { test, expect } from '@playwright/test'


test.describe('Group 1', () => {

    test('Grouping the tests', async ({ page }) => {
        console.log('test 1')
    })

    test('Grouping the tests 2', async ({ page }) => {
        console.log('test 2')
    })
})

test.describe.only('Group 2', () => {

    test('Grouping the tests 3', async ({ page }) => {
        console.log('test 3')
    })

    test('Grouping the tests 4', async ({ page }) => {
        console.log('test 4')
    })
})



