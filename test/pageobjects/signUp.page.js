import { $ } from '@wdio/globals'

class signUpPage {

    get profile (){
        return $('id:tab-profile')
    }
    get signUp (){
        return $('id:signUp')
    }    
    get firstName (){
        return $('id:firstName')
    }
    get lastName (){
        return $('id:lastName')
    }
    get phoneNumber (){
        return $('id:phone')
    }
    get emailAddress (){
        return $('android=new UiSelector().text("Email Address")')
    }
    get password (){
        return $('id:password')
    }
    get rePassword (){
        return $('id:repassword')
    }
    get btnCreate (){
        return $('id:create')
    }

    async signUp(firstName, lastName, phoneNumber, emailAddress, password, rePassword){
        
        await this.profile.click()
        await this.signUp.click()
        await this.firstName.setValue(firstName)
        await this.lastName.setValue(lastName)
        await this.phoneNumber.setValue(phoneNumber)
        await this.emailAddress.setValue(emailAddress)
        await this.password.setValue(password)
        await this.rePassword.setValue(rePassword)
        await this.btnCreate.click()
    }   
}

export default new signUpPage();
