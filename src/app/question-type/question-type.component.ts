import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Question } from '../models/question';

@Component({
  selector: 'question-type',
  templateUrl: './question-type.component.html',
  styleUrls: ['./question-type.component.css']
})
export class QuestionTypeComponent implements OnInit {
  
  @Input() question: Question;
  public answer: string;
        
  constructor() { }

  ngOnInit() {
    if (['boolean', 'multi_multi'].includes(this.question.type)){
      this.question.values = this.question.values.filter(q=>!!q.value);
    }
      
  }

}
