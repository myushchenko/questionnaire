import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Question } from '../models/question';
import { MdDialogConfig, MdDialog } from '@angular/material';
import { AddQuestionModalComponent } from '../add-question-modal/add-question-modal.component';
import { DialogsService } from '../services/dialogs.service';
import { ApiService } from '../services/api.service';

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

    constructor(public dialog: MdDialog, private dialogsService: DialogsService, private api: ApiService) {

    }

    ngOnInit() {
        if (['BOOLEAN', 'MULTI_CHOICE_MULTI'].includes(this.question.type)) {
            this.question.values = this.question.values.filter(q => !!q.value);
        }
        this.api.setBaseUrl(this.questionnaireId);
    }

    editQuestion(event) {
        event.preventDefault();
        const config: MdDialogConfig = {
            width: '750px',
            data: this.question
        };
        const dialogRef = this.dialog.open(AddQuestionModalComponent, config);

        dialogRef.afterClosed().subscribe(result => {
            Object.assign(this.question, result);
            this.api.udateQuestion(this.qId, this.question);
        });
    }

    removeQuestion(event) {
        event.preventDefault();

        this.dialogsService
            .confirm('Confirm Delete', 'Are you sure you want delete question?')
            .subscribe(res => {
                if (res) {
                    this.api.removeQuestion(this.qId);
                }
            });
    }

}
