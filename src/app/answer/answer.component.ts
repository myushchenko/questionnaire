import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-answer',
    templateUrl: './answer.component.html',
    styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
    public questionnaire: any;
    public questionsList: any;
    private subRoter: any;

    constructor(private route: ActivatedRoute, private apiService: ApiService) { }

    ngOnInit() {
        this.subRoter = this.route.params.subscribe(params => {
            const id = params['id'];
            this.apiService.setBaseUrl(id);
            this.apiService.getQuestionnaire().subscribe(response => this.questionnaire = response);
            this.questionsList = this.apiService.getQuestionList();
        });
    }

    ngOnDestroy() {
        this.subRoter.unsubscribe();
    }

    submit(questions) {
        this.apiService.submit(this.questionnaire.name, questions);
    }

}
