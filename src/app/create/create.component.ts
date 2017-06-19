import { Component, OnInit } from '@angular/core';

import { AddQuestionModalComponent } from '../add-question-modal/add-question-modal.component';
import { QuestionService } from '../services/question.service';
import { QuestionnaireService } from '../services/questionnaire.service';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.less']
})

export class CreateComponent implements OnInit {

    public questions = [];
    public name: string;
    public description: string;

    constructor(public questionService: QuestionService, private questionnaireService: QuestionnaireService) { }

    ngOnInit() { }

    addQuestion() {
        this.questionService
            .addQuestion()
            .subscribe(result => result && this.questions.push(result));
    }

    save() {
        this.questionnaireService
            .create(this.name, this.description, this.questions);
    }
}
