import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class ApiService {

    private baseUrl: string;

    constructor(private af: AngularFire, private router: Router,
        private snackBar: MdSnackBar, private authService: AuthService) { }

    public setBaseUrl(id) {
        this.baseUrl = `questionnaires/${id}`;
    }

    public getQuestionnaireList() {
        return this.af.database.list('questionnaires');
    }

    public removeQuestionnaire(qId) {
        this.af.database.object(`/questionnaires/${qId}`).remove();
    }

    public removeReponse(qId) {
        this.af.database.object(`/responses/${qId}`).remove();
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

    public create(name, description, questions) {
        this.saveQuestionnaire(name, description, questions, 'questionnaires', ' has been created', '');
    }

    public submit(name, description, questions) {
        this.saveQuestionnaire(name, description, questions, 'responses', ' has been completed', 'responses');
    }

    private saveQuestionnaire(name, description, origQuestions, type, msg, link) {
        const questions = origQuestions.map(q => {
            q = { ...q };

            if (q.type === 'DATE_TYPE') {
                q.answer = q.answer && q.answer.toString();
            }
            return q;
        });
        const playload = {
            date: new Date().toString(),
            name,
            description,
            submittedBy: this.authService.currentUser.fullName,
            submittedById: this.authService.currentUser.email,
            questions
        };

        this.af.database.list('/' + type).push(playload).then(() => {
            this.snackBar.open(name + msg, '', {
                duration: 2000,
            }).afterDismissed().subscribe(() => {
                this.router.navigate(['/' + link]);
            });
        });
    }
}
