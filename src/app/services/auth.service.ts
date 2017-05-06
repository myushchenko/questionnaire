import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AuthFirebase } from '../providers/auth.firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

    public currentUser: User;
    public auth: AngularFireAuth;

    constructor(public afService: AuthFirebase) {
        this.auth = this.afService.afAuth;
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
