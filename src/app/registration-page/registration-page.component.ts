import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthFirebase } from '../providers/auth.firebase';

@Component({
    selector: 'app-registration-page',
    templateUrl: './registration-page.component.html',
    styleUrls: ['./registration-page.component.less']
})

export class RegistrationPageComponent implements OnInit {
    public error: any;

    constructor(private afService: AuthFirebase, private router: Router) { }

    ngOnInit() { }

    register(event, name, email, password) {
        event.preventDefault();

        this.afService
            .registerUser(email, password)
            .then((user) => {

                this.afService
                    .saveUserInfoFromForm(user.uid, name, email)
                    .then(() => {
                        this.router.navigate(['']);
                    }).catch((error) => this.error = error);

        }).catch((error) => this.error = error);
    }

}
