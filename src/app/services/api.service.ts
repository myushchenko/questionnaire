import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Injectable()
export class ApiService {

    private baseUrl: string;

    constructor(private af: AngularFire, private router: Router, private snackBar: MdSnackBar) { }

    public setBaseUrl(id) {
        this.baseUrl = `questionnaires/${id}`;
    }

    public getQuestionnaireList() {
        return this.af.database.list('questionnaires');
    }

     public getReponseList() {
        return this.af.database.list('responses');
    }

    public getQuestionnaire() {
        return this.af.database.object(this.baseUrl);
    }

    public getQuestionList() {
        return this.af.database.list(this.baseUrl + '/questions');
    }

    public udapteQuestionnaire() {
        this.af.database.object(this.baseUrl).update({ date: new Date() });
    }

    public udateQuestion(qId, question) {
        this.af.database.object(this.baseUrl + `/questions/${qId}`)
            .update(question).then(_ => this.udapteQuestionnaire());
    }

    public removeQuestion(qId) {
        this.af.database.object(this.baseUrl + `/questions/${qId}`).remove();
    }

    public create(name, questions) {
        this.saveQuestionnaire(name, questions, 'questionnaires', ' has been created');
    }

    public submit(name, questions) {
        this.saveQuestionnaire(name, questions, 'responses', ' has been completed');
    }

    private saveQuestionnaire(name, questions, type, msg) {
        const playload = {
            date: new Date().toString(),
            name,
            questions
        };

        this.af.database.list('/' + type).push(playload).then(() => {
            this.snackBar.open(name + msg, '', {
                duration: 2000,
            }).afterDismissed().subscribe(() => {
                this.router.navigate(['/']);
            });
        });
    }
}
