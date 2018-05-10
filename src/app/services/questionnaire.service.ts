import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuestionnaireService {

    private baseUrl = 'questionnaires';

    constructor(private db: AngularFireDatabase, private router: Router,
        private snackBar: MatSnackBar, private authService: AuthService) { }

    public getList(): Observable<any[]> {
        return this.db.list(this.baseUrl).snapshotChanges().map(actions => {
            return actions.map((a: any) => {
                const id = a.payload.key;
                return { id, ...a.payload.val() };
            });
        });
    }

    public get(questionnaireId): Observable<any> {
        return this.db.object(this.baseUrl + `/${questionnaireId}`).valueChanges();
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

    public getQuestionFireList(questionnaireId): AngularFireList<any> {
        return this.db.list(this.baseUrl + `/${questionnaireId}/questions`);
    }

    public getQuestionList(questionnaireId): Observable<any[]> {
        return this.getQuestionFireList(questionnaireId)
            .snapshotChanges().map(actions => {
                return actions.map((a: any) => {
                    const id = a.payload.key;
                    return { id, ...a.payload.val() };
                });
            });
    }

    public udateQuestion(questionnaireId, qId, question) {
        this.db.object(this.baseUrl + `/${questionnaireId}/questions/${qId}`)
            .update(question).then(_ => this.udapte(questionnaireId));
    }

    public removeQuestion(questionnaireId, qId) {
        this.db.object(this.baseUrl + `/${questionnaireId}/questions/${qId}`).remove();
    }
}
