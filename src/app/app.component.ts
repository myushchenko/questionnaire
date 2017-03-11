import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { Router } from "@angular/router";
import { AuthFirebase } from './providers/auth.firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //items: FirebaseListObservable<any[]>;
  public title = 'My Questionnaire!';
  public isLoggedIn: boolean;

  constructor(public afService: AuthFirebase, private router: Router) {
    //this.items = af.database.list('/items');

    // This asynchronously checks if our user is logged it and will automatically
    // redirect them to the Login page when the status changes.
    // This is just a small thing that Firebase does that makes it easy to use.
    this.afService.af.auth.subscribe(
      (auth) => {
        if(auth == null) {
          console.log("Not Logged in.");
          this.router.navigate(['login']);
          this.isLoggedIn = false;
        }
        else {
          console.log("Successfully Logged in.");
          this.isLoggedIn = true;
          // UPDATE: I forgot this at first. Without it when a user is logged in and goes directly to /login
          // the user did not get redirected to the home page.
          this.router.navigate(['']);
        }
      }
    );
  }

  logout() {
    this.afService.logout();
  }
  
}
