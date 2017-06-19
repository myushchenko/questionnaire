import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { QuestionnaireService } from '../services/questionnaire.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit {
    
    public questionnaireList: FirebaseListObservable<any>;

    constructor(private questionnaireService: QuestionnaireService) { }

    ngOnInit() {
        this.questionnaireList = this.questionnaireService.getList();
    }
}
