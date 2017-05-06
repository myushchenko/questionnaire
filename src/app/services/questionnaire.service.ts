import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class QuestionnaireService {

    private baseUrl = 'questionnaires';

    constructor(private db: AngularFireDatabase, private router: Router,
        private snackBar: MdSnackBar, private authService: AuthService) { }

    public getList() {
        return this.db.list(this.baseUrl);
    }

    public get(questionnaireId) {
        return this.db.object(this.baseUrl + `/${questionnaireId}`);
    }

    public create(name, description, questions) {
        const playload = {
            date: new Date().toString(),
            name,
            description,
            submittedBy: this.authService.currentUser.fullName,
            submittedById: this.authService.currentUser.email,
            questions
        };

        this.db.list(this.baseUrl).push(playload).then(() => {
            this.snackBar.open('New Questionnaire has been created', '', {
                duration: 2000,
            }).afterDismissed().subscribe(() => {
                this.router.navigate(['/']);
            });
        });
    }

    public udapte(questionnaireId) {
        this.db.object(this.baseUrl + `/${questionnaireId}`).update({ date: new Date() });
    }

    public remove(questionnaireId) {
        this.db.object(this.baseUrl + `/${questionnaireId}`).remove();
    }

    public getQuestionList(questionnaireId) {
        return this.db.list(this.baseUrl + `/${questionnaireId}/questions`);
    }

    public udateQuestion(questionnaireId, qId, question) {
        this.db.object(this.baseUrl + `/${questionnaireId}/questions/${qId}`)
            .update(question).then(_ => this.udapte(questionnaireId));
    }

    public removeQuestion(questionnaireId, qId) {
        this.db.object(this.baseUrl + `/${questionnaireId}/questions/${qId}`).remove();
    }
}
