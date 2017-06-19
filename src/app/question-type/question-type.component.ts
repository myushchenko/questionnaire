import { Component, OnInit, Input } from '@angular/core';

import { Question } from '../models/question';
import { DialogsService } from '../services/dialogs.service';
import { QuestionService } from '../services/question.service';
import { QuestionnaireService } from '../services/questionnaire.service';

@Component({
    selector: 'question-type',
    templateUrl: './question-type.component.html',
    styleUrls: ['./question-type.component.less']
})

export class QuestionTypeComponent implements OnInit {

    @Input() questionnaireId: any;
    @Input() question: Question;
    @Input() qId: any;
    @Input() readonly: boolean;
    @Input() edit: boolean;

    public answer: string;

    constructor(private dialogsService: DialogsService, private questionnaireService: QuestionnaireService,
        public questionService: QuestionService) { }

    ngOnInit() {
        if (['BOOLEAN', 'MULTI_CHOICE_MULTI'].includes(this.question.type)) {
            this.question.values = this.question.values.filter(q => !!q.value);
        }
    }

    editQuestion(event) {
        event.preventDefault();

        this.questionService.editQuestion(this.question).subscribe(result => {
            if (result) {
                Object.assign(this.question, result);
                this.questionnaireService.udateQuestion(this.questionnaireId, this.qId, this.question);
            }
        });
    }

    removeQuestion(event) {
        event.preventDefault();

        this.dialogsService
            .confirm('Confirm Delete', 'Are you sure you want delete question?')
            .subscribe(res => res && this.questionnaireService.removeQuestion(this.questionnaireId, this.qId));
    }
}
