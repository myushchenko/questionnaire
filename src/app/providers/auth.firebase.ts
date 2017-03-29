import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthFirebase {

    constructor(public af: AngularFire) { }

    loginWithGoogle() {
        return this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup,
        });
    }

    logout() {
        return this.af.auth.logout();
    }

    registerUser(email, password) {
        return this.af.auth.createUser({
            email: email,
            password: password
        });
    }

    saveUserInfoFromForm(uid, name, email) {
        return this.af.database.object('registeredUsers/' + uid).set({
            name: name,
            email: email,
        });
    }

    loginWithEmail(email, password) {
        return this.af.auth.login({
            email: email,
            password: password
        }, {
                provider: AuthProviders.Password,
                method: AuthMethods.Password
            }
        );
    }
}
