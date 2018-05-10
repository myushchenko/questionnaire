import { MatDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'confirm-dialog',
    template: `
        <p>{{ title }}</p>
        <p>{{ message }}</p>
        <button type="button" class="mr-1" mat-raised-button color="warn"
            (click)="dialogRef.close(true)">OK</button>
        <button type="button" mat-raised-button color="accent"
            (click)="dialogRef.close()">Cancel</button>
    `,
})
export class ConfirmDialog {

    public title: string;
    public message: string;

    constructor(public dialogRef: MatDialogRef<ConfirmDialog>) {

    }
}
