import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthFirebase } from '../providers/auth.firebase';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
    public error: any;

    constructor(public afService: AuthFirebase, private router: Router) { }

    ngOnInit() { }

    login() {
        this.afService.loginWithGoogle().then((data) => {
            this.router.navigate(['']);
        });
    }

    loginWithEmail(event, email, password) {
        event.preventDefault();

        this.afService
            .loginWithEmail(email, password)
            .then(() => this.router.navigate(['']))
            .catch((error: any) => this.error = error);
    }

}
