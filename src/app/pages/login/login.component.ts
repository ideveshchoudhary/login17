import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isRightDivShown: boolean = false;

  signUpObj: SignUpModel = new SignUpModel();

  loginObj: LoginModel = new LoginModel();
  constructor(private route: Router) { }
  onRegister() {
    debugger
    const localuser = localStorage.getItem("signinUsers") //key for storing data in localstorage
    if (localuser != null) {
      const storeuser = JSON.parse(localuser);
      storeuser.push(this.signUpObj);
      localStorage.setItem("signinUsers", JSON.stringify(storeuser))
    }
    else {
      const storeuser = [];
      storeuser.push(this.signUpObj);
      localStorage.setItem("signinUsers", JSON.stringify(storeuser))
      alert("Register Succsfull")
    }
  }

  loginUser() {
    debugger
    const localusers = localStorage.getItem("signinUsers"); //use data from local strg
    if (localusers != null) {
      const findDataObj = JSON.parse(localusers)
      const isUserPresent = findDataObj.find((user: SignUpModel) => user.email == this.loginObj.email && user.password == this.loginObj.password)
      if (isUserPresent != undefined) {
        alert("login SuccessFull");
        localStorage.setItem("signinUsers", JSON.stringify(isUserPresent))
        this.route.navigateByUrl('/dashboard')
      }
      else {
        alert("wrong details")
      }
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



