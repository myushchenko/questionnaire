import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Question } from '../models/question';
import { MdDialogConfig, MdDialog } from "@angular/material";
import { AddQuestionModalComponent } from "../add-question-modal/add-question-modal.component";
import { AngularFire } from "angularfire2";
import { DialogsService } from "../services/dialogs.service";

@Component({
    selector: 'question-type',
    templateUrl: './question-type.component.html',
    styleUrls: ['./question-type.component.css']
})
export class QuestionTypeComponent implements OnInit {

    @Input() questionnaireId: any;
    @Input() question: Question;
    @Input() qId: any;
    @Input() readonly: boolean;
    public answer: string;

    constructor(public af: AngularFire, public dialog: MdDialog, private dialogsService: DialogsService) {

    }

    ngOnInit() {
        if (['BOOLEAN', 'MULTI_CHOICE_MULTI'].includes(this.question.type)) {
            this.question.values = this.question.values.filter(q => !!q.value);
        }
        console.log(this.questionnaireId)
    }

    editQuestion(event) {
        event.preventDefault();
        let config: MdDialogConfig = {
            width: '750px',
            data: this.question
        }
        let dialogRef = this.dialog.open(AddQuestionModalComponent, config);

        dialogRef.afterClosed().subscribe(result => {
            Object.assign(this.question, result);
        });
    }

    removeQuestion(event) {
        event.preventDefault();

        this.dialogsService
            .confirm('Confirm Delete', 'Are you sure you want delete question?')
            .subscribe(res => {
                if (res) {
                    this.af.database.object(`questionnaires/${this.questionnaireId}/questions/${this.qId}`).remove();
                }
            });
    }

}
