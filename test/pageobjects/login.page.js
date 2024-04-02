import { $ } from '@wdio/globals'

class LoginPage {
    
    //get por ID
    get email (){
        return $('id:email')
    }
    //get por texto
    get password (){
        return $('android=new UiSelector().text("Password")')
    }
    //get assebility ID
    get btnLogin (){
        return $('~Login')
    }

    async login(email, password){
        await this.email.setValue(email)
        await this.password.setValue(password)
        await this.btnLogin.click()
    }   
}

export default new LoginPage();
