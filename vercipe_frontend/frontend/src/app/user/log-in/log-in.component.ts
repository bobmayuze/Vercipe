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
    console.log(`Login Result:` , loginResult);

    const loginFlag: any = JSON.stringify(sessionStorage.getItem(`currentUser`));

    if (loginFlag === `null`) {
      alert(`Login Failed`);
    } else {
      alert(`Successfully logged in`);
      window.location.reload();
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
