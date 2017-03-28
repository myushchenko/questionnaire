import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { DialogsService } from '../services/dialogs.service';

@Component({
    selector: 'app-response',
    templateUrl: './response.component.html',
    styleUrls: ['./response.component.less']
})
export class ResponseComponent implements OnInit {

    public responseList: FirebaseListObservable<any>;
    public currentUserId: string;

    constructor(private apiService: ApiService, private authService: AuthService,
        private dialogsService: DialogsService) { }

    ngOnInit() {
        this.responseList = this.apiService.getReponseList();
        this.currentUserId = this.authService.currentUser.email;
    }

    remove(id) {
        this.dialogsService
            .confirm('Confirm Delete', 'Are you sure you want delete question?')
            .subscribe(res => res && this.apiService.removeReponse(id));
    }

}
