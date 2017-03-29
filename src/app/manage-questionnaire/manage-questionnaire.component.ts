import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { QuestionnaireService } from '../services/questionnaire.service';

@Component({
    selector: 'app-manage-questionnaire',
    templateUrl: './manage-questionnaire.component.html',
    styleUrls: ['./manage-questionnaire.component.less']
})
export class ManageQuestionnaireComponent implements OnInit {

    public questionnaire: FirebaseObjectObservable<any>;
    public questions: FirebaseListObservable<any>;
    public questionnaireId: string;
    private subRoter: any;

    constructor(private route: ActivatedRoute, public questionService: QuestionService,
        private questionnaireService: QuestionnaireService) { }

    ngOnInit() {

        this.subRoter = this.route.params.subscribe(params => {
            this.questionnaireId = params['id'];

            this.questionnaireService
                .get(this.questionnaireId)
                .subscribe(response => {
                    this.questionnaire = response;
                });

            this.questions = this.questionnaireService
                .getQuestionList(this.questionnaireId);
        });
    }

    ngOnDestroy() {
        this.subRoter.unsubscribe();
    }

    addQuestion() {
        this.questionService
            .addQuestion()
            .subscribe(result => result && this.questions.push(result));
    }
}
