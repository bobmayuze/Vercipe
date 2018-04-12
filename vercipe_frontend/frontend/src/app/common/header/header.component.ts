import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../user/user';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private username: string;
  private password: string;
  check: boolean;
  formClick: boolean;
  signUpClick: boolean;
  cancelClick: boolean;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.check = true;
    this.formClick = false;
    this.signUpClick = false;
    this.cancelClick = false;
  }

  loginModal() {
    console.log(`Clicked`);
    const loginFlag: any = JSON.stringify(sessionStorage.getItem(`currentUser`));
    console.log(loginFlag);
    if (loginFlag === `null`) {
      console.log(`Please Login First`);
      this.check = false;
    } else {
      console.log(`User logged in already`);
      this.router.navigateByUrl('/dashboard');
    }
  }
  async login() {
    const user: any = {};
    let loginResult: any;
    user.username = this.username;
    user.password = this.password;

    loginResult = await this.userService.signIn(user);
    console.log(loginResult);

    let logInFlag: any;
    logInFlag = await this.userService.checkSignIn();
    if (logInFlag) {
      console.log(`Successfully logged in`);
      this.check = true;
      this.router.navigateByUrl('/');
      window.location.reload();
    } else {
      console.log(`Please Login first`);
    }

  }

  async checkLogIn() {
    let flag: any;
    flag = await this.userService.checkSignIn();
    if (flag) {
      console.log(`User loged in already`);
    } else {
      console.log(`Please Login first`);
    }
  }
  hideModal(): boolean {
    return this.check;
  }
  clickCheck() {
    if (this.signUpClick === true) {
       this.formClick = false;
       this.signUpClick = false;
    }
    if (this.cancelClick === true) {
       this.check = true;
       this.cancelClick = false;
       this.formClick = false;
    } else if (this.formClick === true) {
       this.check = false;
    } else {
       this.check = true;
    }
    this.formClick = false;
  }
  formShow() {
    this.formClick = true;
  }
  signUp() {
    this.check = true;
    this.signUpClick = true;
    this.router.navigateByUrl(`/signup`);
  }
  cancel() {
    this.cancelClick = true;
  }
}
