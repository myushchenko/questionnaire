import { Component, OnInit } from '@angular/core';
import { AddQuestionModalComponent } from '../add-question-modal/add-question-modal.component';
import { QuestionService } from '../services/question.service';
import { ApiService } from '../services/api.service';
import { FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

    public questionnaires: FirebaseListObservable<any>;
    public questions = [];

    constructor(public questionService: QuestionService, private apiService: ApiService) {
        this.questionnaires = this.apiService.getQuestionnaireList();
    }

    ngOnInit() { }

    addQuestion() {
        this.questionService.addQuestion().subscribe(result => {
            if (result) {
                this.questions.push(result);
            }
        });
    }

    save(name: string, action: string) {
        this.apiService.create(name, this.questions);
    }
}
