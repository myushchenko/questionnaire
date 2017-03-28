import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { ApiService } from '../services/api.service';
import { DialogsService } from '../services/dialogs.service';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.less']
})

export class ManageComponent implements OnInit {

    public questionnaires: FirebaseListObservable<any>;
    public currentUserId: string;

    constructor(private apiService: ApiService, private dialogsService: DialogsService,
        private authService: AuthService) {}

    ngOnInit() {
        this.questionnaires = this.apiService.getQuestionnaireList();
        this.currentUserId = this.authService.currentUser.email;
    }

    remove(id) {
        this.dialogsService
            .confirm('Confirm Delete', 'Are you sure you want delete question?')
            .subscribe(res => res && this.apiService.removeQuestionnaire(id));
    }

    isCurrentUser(q) {
        return q.submittedById === this.authService.currentUser.email;
    }

}
