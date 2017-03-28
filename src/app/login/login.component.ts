import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthFirebase } from '../providers/auth.firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {

  constructor(public afService: AuthFirebase, private router: Router) {}

  login() {
    this.afService.loginWithGoogle().then((data) => {
      // Send them to the homepage if they are logged in
      this.router.navigate(['']);
    });
  }

  ngOnInit() {}

}
