import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  // private adminUser: User;
  private url = 'http://52.170.95.42:3000/users/';
  private result: any = `Not Initialized`;
  private data: string;
  private err: string;
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  signIn(user) {
    let flag: any = `None`;
    return this.http.post<any>(this.url + `log_in`, user)
      .subscribe(
        (response) => {
          this.result = response;
          flag = true;
          sessionStorage.setItem(`currentUser`, JSON.stringify(response));
          console.log(`Service: User successfully loged in`);
          return flag;
        },
        (error) => {
          flag = false;
          this.result = error;
          return flag;
        },
      );
  }

  async checkSignIn() {
    const loginFlag: any = JSON.stringify(sessionStorage.getItem(`currentUser`));
    console.log(loginFlag);
    if (loginFlag === `null`) {
      console.log(`Please Login First`);
      return false;
    } else {
      console.log(`User logged in already`);
      return true;
    }
  }

  async DemoService() {
    console.log(`1`);
    await setTimeout(function () {
      console.log(`2`);
    }, 1000);
    console.log(`3`);
  }

  signUp(json) {
    return this.http.post(this.url + 'sign_up', json).subscribe(
      data => this.data,
      err => this.err
    );
  }


}
