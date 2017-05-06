import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthFirebase {

    constructor(private db: AngularFireDatabase, public afAuth: AngularFireAuth) { }

    loginWithGoogle() {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    logout() {
        return this.afAuth.auth.signOut();
    }

    registerUser(email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    saveUserInfoFromForm(uid, name, email) {
        return this.db.object('registeredUsers/' + uid).set({
            name: name,
            email: email,
        });
    }

    loginWithEmail(email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }
}
