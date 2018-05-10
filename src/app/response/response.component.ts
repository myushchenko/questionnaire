import { Component, OnInit, ViewEncapsulation } from '@angular/core';


import { AuthService } from '../services/auth.service';
import { DialogsService } from '../services/dialogs.service';
import { ResponseService } from '../services/response.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-response',
    templateUrl: './response.component.html',
    styleUrls: ['./response.component.less'],
    encapsulation: ViewEncapsulation.None
})

export class ResponseComponent implements OnInit {

    public responseList: Observable<any>;

    constructor(private responseService: ResponseService, private authService: AuthService,
        private dialogsService: DialogsService) { }

    ngOnInit() {
        this.responseList = this.responseService.getList();
    }

    remove(id) {
        this.dialogsService
            .confirm('Confirm Delete', 'Are you sure you want delete question?')
            .subscribe(res => res && this.responseService.remove(id));
    }

    userResponses(responses: [any]) {
        return responses.filter(q => q.submittedById === this.authService.currentUser.email)
    }

}
