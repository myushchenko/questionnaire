import { Component, OnInit } from '@angular/core';
import { MdSnackBar, MdDialog, MdDialogConfig } from "@angular/material";
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { Router } from "@angular/router";
import { AddQuestionModalComponent } from "../add-question-modal/add-question-modal.component";

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

    public questionnaires: FirebaseListObservable<any>;
    public questions = [];

    constructor(public af: AngularFire, public snackBar: MdSnackBar, private router: Router,
        public dialog: MdDialog) {
        this.questionnaires = this.af.database.list('/questionnaires');
    }

    ngOnInit() { }

    addQuestion() {
        let config: MdDialogConfig = {
            width: '750px'
        }
        let dialogRef = this.dialog.open(AddQuestionModalComponent, config);

        dialogRef.afterClosed().subscribe(result => {
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
