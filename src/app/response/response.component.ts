import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthService } from '../services/auth.service';
import { DialogsService } from '../services/dialogs.service';
import { ResponseService } from '../services/response.service';

@Component({
    selector: 'app-response',
    templateUrl: './response.component.html',
    styleUrls: ['./response.component.less']
})
export class ResponseComponent implements OnInit {

    public responseList: FirebaseListObservable<any>;
    public currentUserId: string;

    constructor(private responseService: ResponseService, private authService: AuthService,
        private dialogsService: DialogsService) { }

    ngOnInit() {
        this.responseList = this.responseService.getList();
        this.currentUserId = this.authService.currentUser.email;
    }

    remove(id) {
        this.dialogsService
            .confirm('Confirm Delete', 'Are you sure you want delete question?')
            .subscribe(res => res && this.responseService.remove(id));
    }

}
