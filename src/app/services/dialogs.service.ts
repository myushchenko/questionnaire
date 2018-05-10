import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MatDialogRef, MatDialog } from '@angular/material';

import { ConfirmDialog } from '../shared/confirm-dialog.component';

@Injectable()
export class DialogsService {

    constructor(private dialog: MatDialog) { }

    public confirm(title: string, message: string): Observable<boolean> {

        let dialogRef: MatDialogRef<ConfirmDialog>;

        dialogRef = this.dialog.open(ConfirmDialog);

        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }
}
