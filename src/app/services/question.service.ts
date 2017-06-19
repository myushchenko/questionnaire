import { Injectable } from '@angular/core';
import { MdDialogConfig, MdDialog } from '@angular/material';

import { AddQuestionModalComponent } from '../add-question-modal/add-question-modal.component';

@Injectable()
export class QuestionService {

    constructor(public dialog: MdDialog) {

    }

    public addQuestion() {
        return this.openQuestion({});
    }

    public editQuestion(data) {
        return this.openQuestion(data);
    }

    private openQuestion(data?) {
        const config: MdDialogConfig = {
            width: '750px',
            data
        };
        const dialogRef = this.dialog.open(AddQuestionModalComponent, config);

        return dialogRef.afterClosed();
    }
}
