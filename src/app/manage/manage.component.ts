import { Component, OnInit } from '@angular/core';
// import { FirebaseListObservable } from 'angularfire2/database';

import { DialogsService } from '../services/dialogs.service';
import { AuthService } from '../services/auth.service';
import { QuestionnaireService } from '../services/questionnaire.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.less']
})

export class ManageComponent implements OnInit {

    public questionnaireList: Observable<any>;

    constructor(
        private questionnaireService: QuestionnaireService,
        private dialogsService: DialogsService,
        private authService: AuthService) {}

    ngOnInit() {
        this.questionnaireList = this.questionnaireService.getList();
    }

    remove(id) {
        this.dialogsService
            .confirm('Confirm Delete', 'Are you sure you want delete question?')
            .subscribe(res => res && this.questionnaireService.remove(id));
    }

    userQuestionnaires(questionnaires: [any]) {
        return questionnaires.filter(q => q.submittedById === this.authService.currentUser.email)
    }
}
