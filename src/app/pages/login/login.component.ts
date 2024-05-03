import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isRightDivShown: boolean = false;

  signUpObj: SignUpModel = new SignUpModel();

  loginObj: LoginModel = new LoginModel();

  onRegister() {
    debugger
    const localuser = localStorage.getItem("signinUsers") //key for storing data in localstorage
    if (localuser != null) {
      const storeuser = JSON.parse(localuser);
      storeuser.push(this.signUpObj);
      localStorage.setItem("signinUsers", JSON.stringify(storeuser))
      alert("Register Succsfull")
    }
    else {
      const storeuser = [];
      storeuser.push(this.signUpObj);
      localStorage.setItem("signupForm", JSON.stringify(storeuser))
    }
  }

}

export class SignUpModel {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.name = "";
    this.email = "";
    this.password = "";
  }
}

export class LoginModel {
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.password = "";
  }
}



