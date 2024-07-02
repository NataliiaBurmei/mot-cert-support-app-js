const { expect, browser, $ } = require('@wdio/globals')

describe('My login application', () => {

    it('should login with valid credentials', async () => {
        await browser.url('http://localhost:3000/#/login')

        await $('input[name=email]').setValue('admin@test.com')
        await $('input[name=password]').setValue('password123')
        await $('button').click()
        
        const element = await $('.card-title')
        await expect (element).toHaveText('Projects')

    })

    it('should not login with invalid credentials', async () => {
        await browser.url('http://localhost:3000/#/login')

        await $('input[name=email]').setValue('invalidemail.com')
        await $('input[name=password]').setValue('invalidpassword')
        await $('button').click()
        
        const element = await $('.card-title')
        await expect (element).toHaveText('Projects')
    })
})