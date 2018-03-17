import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  private username: string;
  private password: string;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
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
      this.router.navigateByUrl('/');
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
}
