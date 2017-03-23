import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from "@angular/material";
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { Router } from "@angular/router";
import { AddQuestionModalComponent } from "../add-question-modal/add-question-modal.component";
import { QuestionService } from "../services/question.service";

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

    public questionnaires: FirebaseListObservable<any>;
    public questions = [];

    constructor(public af: AngularFire, public snackBar: MdSnackBar, private router: Router,
        public questionService: QuestionService) {
        this.questionnaires = this.af.database.list('/questionnaires');
    }

    ngOnInit() { }

    addQuestion() {
        this.questionService.addQuestion().subscribe(result => {
            if (result) {
                this.questions.push(result);
            }
        });
    }

    save(name: string, action: string) {
        this.questionnaires.push({
            date: new Date(),
            name: name,
            questions: this.questions
        }).then(() => {
            this.snackBar.open(name + ' has been created', '', {
                duration: 2000,
            }).afterDismissed().subscribe(() => {
                this.router.navigate(['/']);
            });
        });
    }
}
