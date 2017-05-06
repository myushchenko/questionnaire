import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionnaireService } from '../services/questionnaire.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { ResponseService } from '../services/response.service';

@Component({
    selector: 'app-answer',
    templateUrl: './answer.component.html',
    styleUrls: ['./answer.component.less']
})
export class AnswerComponent implements OnInit {

    public questionnaire: any;
    public questionsList: FirebaseListObservable<any>;
    private subRoter: any;

    constructor(private route: ActivatedRoute, private questionnaireService: QuestionnaireService,
        private responseService: ResponseService) { }

    ngOnInit() {
        this.subRoter = this.route.params.subscribe(params => {
            const id = params['id'];
            this.questionnaireService.get(id).subscribe(response => this.questionnaire = response);
            this.questionsList = this.questionnaireService.getQuestionList(id);
        });
    }

    ngOnDestroy() {
        this.subRoter.unsubscribe();
    }

    submit(questions) {
        this.responseService.submit(this.questionnaire.name, this.questionnaire.description, questions);
    }

}
