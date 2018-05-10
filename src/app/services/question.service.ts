import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';

import { AddQuestionModalComponent } from '../add-question-modal/add-question-modal.component';

@Injectable()
export class QuestionService {

    constructor(public dialog: MatDialog) {

    }

    public addQuestion() {
        return this.openQuestion({});
    }

    public editQuestion(data) {
        return this.openQuestion(data);
    }

    private openQuestion(data?) {
        const config: MatDialogConfig = {
            width: '750px',
            data
        };
        const dialogRef = this.dialog.open(AddQuestionModalComponent, config);

        return dialogRef.afterClosed();
    }
}
