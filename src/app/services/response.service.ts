import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class ResponseService {

    private baseUrl = 'responses';

    constructor(private af: AngularFire, private router: Router,
        private snackBar: MdSnackBar, private authService: AuthService) { }

    public getList() {
        return this.af.database.list(this.baseUrl);
    }

    public get(questionnaireId) {
        return this.af.database.object(this.baseUrl + `/${questionnaireId}`);
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

        this.af.database.list(this.baseUrl).push(playload).then(() => {
            this.snackBar.open(name + 'has been completed', '', {
                duration: 2000,
            }).afterDismissed().subscribe(() => {
                this.router.navigate(['/responses']);
            });
        });
    }

    public remove(qId) {
        this.af.database.object(this.baseUrl + `/${qId}`).remove();
    }
}
