import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

import { QuestionService } from '../services/question.service';
import { QuestionnaireService } from '../services/questionnaire.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from 'angularfire2/database';

@Component({
    selector: 'app-manage-questionnaire',
    templateUrl: './manage-questionnaire.component.html',
    styleUrls: ['./manage-questionnaire.component.less']
})

export class ManageQuestionnaireComponent implements OnInit {

    public questionnaire: Observable<any[]>;
    public questions: Observable<any[]>;
    public questionnaireId: string;

    private subRoter: any;
    private questionsRef: AngularFireList<any>;

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

            this.questionsRef = this.questionnaireService.getQuestionFireList(this.questionnaireId);

            this.questions = this.questionsRef.snapshotChanges().map(actions => {
                return actions.map((a: any) => {
                    const id = a.payload.key;
                    return { id, ...a.payload.val() };
                });
            });
        });
    }

    ngOnDestroy() {
        this.subRoter.unsubscribe();
    }

    addQuestion() {
        this.questionService
            .addQuestion()
            .subscribe(result => result && this.questionsRef.push(result));
    }
}
