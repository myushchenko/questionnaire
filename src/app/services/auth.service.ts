import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AuthFirebase } from '../providers/auth.firebase';
import { AngularFireAuth } from 'angularfire2';

@Injectable()
export class AuthService {

    public currentUser: User;

    public auth: AngularFireAuth;

    constructor(public afService: AuthFirebase) {
        this.auth = this.afService.af.auth;

        /*this.auth.subscribe(
            (auth) => {
                if (auth) {
                    console.log('AuthService: ', auth.google);
                    this.setCurrentUser(auth.google);
                }
            }
        );*/
    }

    public setCurrentUser(user) {
        this.currentUser = new User(user.displayName, user.email);
    }

    public isAuthenticated() {
        return !!this.currentUser;
    }

    public logout() {
        this.afService.logout();
    }
}
