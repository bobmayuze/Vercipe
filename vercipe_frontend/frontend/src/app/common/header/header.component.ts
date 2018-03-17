import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userInfo } from 'os';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log(`Clicked`);
    const loginFlag: any = JSON.stringify(sessionStorage.getItem(`currentUser`));
    console.log(loginFlag);
    if (loginFlag === `null`) {
      console.log(`Please Login First`);
      this.router.navigateByUrl('/login');
    } else {
      console.log(`User logged in already`);
      this.router.navigateByUrl('/dashboard');
    }
  }

}
