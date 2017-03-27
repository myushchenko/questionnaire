import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'app-answer',
    templateUrl: './answer.component.html',
    styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
    public questionnaire: any;
    private responses: FirebaseListObservable<any[]>;
    public questions: any;
    public questionsList: any;
    private subRoter: any;

    constructor(public af: AngularFire, private route: ActivatedRoute, 
        private router: Router,
        public snackBar: MdSnackBar) { }

    ngOnInit() {
        this.subRoter = this.route.params.subscribe(params => {
            const id = params['id'];
            this.af.database.object(`questionnaires/${id}`).subscribe(response => {
                this.questionnaire = response;
                console.log(this.questionnaire)
            });
            this.questionsList = this.af.database.list(`questionnaires/${id}/questions`);
            this.responses = this.af.database.list('/responses');
        });
    }

    ngOnDestroy() {
        this.subRoter.unsubscribe();
    }

    submit(questions) {
        console.log(questions);
        this.responses.push({
            date: new Date(),
            name: this.questionnaire.name,
            questions: questions
        }).then(() => {
            this.snackBar.open(this.questionnaire.name + ' has been completed', '', {
                duration: 2000,
            }).afterDismissed().subscribe(() => {
                this.router.navigate(['/']);
            });
        });
    }

}
