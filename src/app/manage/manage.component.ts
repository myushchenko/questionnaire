import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { DialogsService } from '../services/dialogs.service';
import { AuthService } from '../services/auth.service';
import { QuestionnaireService } from '../services/questionnaire.service';

@Component({
    selector: 'app-manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.less']
})

export class ManageComponent implements OnInit {

    public questionnaireList: FirebaseListObservable<any>;
    public currentUserId: string;

    constructor(private questionnaireService: QuestionnaireService, private dialogsService: DialogsService,
        private authService: AuthService) {}

    ngOnInit() {
        this.questionnaireList = this.questionnaireService.getList();
        this.currentUserId = this.authService.currentUser.email;
    }

    remove(id) {
        this.dialogsService
            .confirm('Confirm Delete', 'Are you sure you want delete question?')
            .subscribe(res => res && this.questionnaireService.remove(id));
    }

    isCurrentUser(q) {
        return q.submittedById === this.authService.currentUser.email;
    }

}
