import { Component, Input } from '@angular/core';
import { MdDialogRef } from "@angular/material";

@Component({
  selector: 'app-add-question-modal',
  templateUrl: './add-question-modal.component.html',
  styleUrls: ['./add-question-modal.component.css']
})
export class AddQuestionModalComponent {

  @Input() name;
  currentType = '';
  qTypes = [
    {code: 'boolean', name: 'Boolean'},
    {code: 'multi_multi', name: 'Multi answers with one choice'}
  ];

  constructor(public dialogRef: MdDialogRef<AddQuestionModalComponent>) {
    
  }

}
