import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { QuestionnaireService } from '../services/questionnaire.service';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit {

    public questionnaireList: Observable<any>;
    public showMine: Boolean = true;

    constructor(
        private questionnaireService: QuestionnaireService,
        private authService: AuthService) { }

    ngOnInit() {
        this.questionnaireList = this.questionnaireService.getList();
    }

    filterQuestionnaires(questionnaires: [any]) {
        return this.showMine ? questionnaires.filter(q => q.submittedById === this.authService.currentUser.email) : questionnaires;
    }
}
