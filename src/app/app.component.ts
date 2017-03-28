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
        this.authService.auth.subscribe((res) => {
            if (res && res.auth) {
                this.loggedUser = res.google.displayName;
                return;
            }
            this.router.navigate(['/login']);
        });
    }

}
