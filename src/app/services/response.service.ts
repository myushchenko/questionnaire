import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AngularFireDatabase } from 'angularfire2/database';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ResponseService {

    private baseUrl = 'responses';

    constructor(private db: AngularFireDatabase, private router: Router,
        private snackBar: MatSnackBar, private authService: AuthService) { }

    public getList(): Observable<any> {
        return this.db.list(this.baseUrl).snapshotChanges().map(actions => {
            return actions.map((a: any) => {
                const id = a.payload.key;
                return { id, ...a.payload.val() };
            });
        });
    }

    public get(questionnaireId) {
        return this.db.object(this.baseUrl + `/${questionnaireId}`);
    }

    public submit(name, description, origQuestions) {
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

        this.db.list(this.baseUrl).push(playload).then(() => {
            this.snackBar.open(name + 'has been completed', '', {
                duration: 2000,
            }).afterDismissed().subscribe(() => {
                this.router.navigate(['/responses']);
            });
        });
    }

    public remove(qId) {
        this.db.object(this.baseUrl + `/${qId}`).remove();
    }
}
