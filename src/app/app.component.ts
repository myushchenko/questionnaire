import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})

export class AppComponent {
    public loggedUser: any;

    constructor(private router: Router, private authService: AuthService) {
        this.initLoginUser();
    }

    logout() {
        this.authService.logout();
    }

    private initLoginUser() {
        this.authService.auth.authState.subscribe(res => {
             if (!res) {
                 this.router.navigate(['/login']);
                 return;
             }
             this.loggedUser = res.displayName || res.email;
        });
    }

}
