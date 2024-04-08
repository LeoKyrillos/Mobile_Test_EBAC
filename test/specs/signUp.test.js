import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'
import signUpPage from '../pageobjects/SignUp.page.js'

describe('My Sign Up application', () => {
    it('should sign up with valid credentials', async () => {
        await homePage.openMenu('profile')
        await signUpPage.signUp('Zé', 'Roberto', '8132282953','zeroberto1@ebac.art.br', 'ze1234', 'ze1234')
        await homePage.openMenu('profile')
        expect((await profilePage.ProfileName('Zé Roberto')).isDisplayed()).toBeTruthy()
    })
})
