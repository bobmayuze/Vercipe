import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private username: string;
  private password: string;
  private email: string;
  private passwordConf: string;


  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signUp(): void {
    if ((this.username == null) || (this.password == null) || this.passwordConf == null) {
      alert(`Please fill in all required fields`);
    } else if (this.password !== this.passwordConf) {
      alert(`Password and confirmed password don't match`);
    } else {
      const send: any = {};
      send.username = this.username;
      send.password = this.password;
      send.passwordConf = this.passwordConf;
      send.email = this.email;
      this.userService.signUp(send);
      alert(`Signup success, now navigating you to home page`);
      this.router.navigateByUrl('/');
    }

  }

}
