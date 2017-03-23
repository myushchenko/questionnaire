import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'confirm-dialog',
    template: `
        <p>{{ title }}</p>
        <p>{{ message }}</p>
        <button type="button" md-raised-button 
            (click)="dialogRef.close(true)">OK</button>
        <button type="button" md-button 
            (click)="dialogRef.close()">Cancel</button>
    `,
})
export class ConfirmDialog {

    public title: string;
    public message: string;

    constructor(public dialogRef: MdDialogRef<ConfirmDialog>) {

    }
}
