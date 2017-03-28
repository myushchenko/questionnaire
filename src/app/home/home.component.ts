import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit {
    public questionnaireList: FirebaseListObservable<any>;

    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.questionnaireList = this.apiService.getQuestionnaireList();
    }
}
