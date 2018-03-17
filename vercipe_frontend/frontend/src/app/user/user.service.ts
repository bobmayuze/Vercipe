import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  // private adminUser: User;
  private url = 'http://localhost:3000/users/';
  private result: any = `Not Initialized`;
  constructor(private http: HttpClient) { }

  signIn(user) {
    let flag: any = `None`;
    return this.http.post<any>(this.url + `log_in`, user)
      .subscribe(
        (response) => {
          this.result = response;
          flag = true;
          sessionStorage.setItem(`currentUser`, JSON.stringify(response));
          console.log(`Service: Success`);
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
    const requestBody: any = {};
    requestBody.user = JSON.stringify(sessionStorage.getItem(`currentUser`));
    if (requestBody.user) {
      console.log(`SERVICE: LOGEED IN`);
      return true;
    } else {
      return false;
    }
    // await this.http.post(this.url + `dashboard`, requestBody).subscribe(
    //   (result) => {
    //     this.result = result;
    //   }
    // );
    // return this.result;
  }

  async DemoService() {
    console.log(`1`);
    await setTimeout(function () {
      console.log(`2`);
    }, 1000);
    console.log(`3`);
  }


}
