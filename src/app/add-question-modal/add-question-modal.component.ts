import { Component, Input } from '@angular/core';
import { MdDialogRef } from "@angular/material";
import { QuestionValue, Question } from "../models/question";

@Component({
  selector: 'app-add-question-modal',
  templateUrl: './add-question-modal.component.html',
  styleUrls: ['./add-question-modal.component.css']
})
export class AddQuestionModalComponent {
  public qTypes = [
    {code: 'boolean', name: 'Boolean'},
    {code: 'multi_multi', name: 'Multi answers with one choice'}
  ];
  
  public question: Question = new Question('', []);

  constructor(public dialogRef: MdDialogRef<AddQuestionModalComponent>) {}

  addValue () {
    this.question.values.push(new QuestionValue('',''));
  }

  save() {
    console.log(this.question)
    this.dialogRef.close(this.question);
  }

  selectType() {
    this.question.values = [];
    if (this.question.type === 'boolean') {
      this.question.values.push(new QuestionValue('',''));
      this.question.values.push(new QuestionValue('',''));
    }
  }

}
