import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { AuthFirebase } from './providers/auth.firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    public title = 'My Questionnaire!';
    public loggedUser: any;

    constructor(public afService: AuthFirebase, private router: Router) {

        this.afService.af.auth.subscribe(
            (auth) => {
                if (auth == null) {
                    this.router.navigate(['login']);
                    this.loggedUser = null;
                } else {
                    this.loggedUser = auth.auth.displayName;
                    this.router.navigate(['']);
                }
            }
        );
    }

    logout() {
        this.afService.logout();
    }

}
