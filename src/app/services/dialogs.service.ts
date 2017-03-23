import { Observable } from 'rxjs/Rx';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';
import { ConfirmDialog } from "../shared/confirm-dialog.component";

@Injectable()
export class DialogsService {

    constructor(private dialog: MdDialog) { }

    public confirm(title: string, message: string): Observable<boolean> {

        let dialogRef: MdDialogRef<ConfirmDialog>;

        dialogRef = this.dialog.open(ConfirmDialog);

        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }
}
