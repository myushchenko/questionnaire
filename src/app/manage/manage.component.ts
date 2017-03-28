import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { ApiService } from '../services/api.service';
import { DialogsService } from '../services/dialogs.service';

@Component({
    selector: 'app-manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.less']
})

export class ManageComponent implements OnInit {

    public questionnaires: FirebaseListObservable<any>;

    constructor(private apiService: ApiService, private dialogsService: DialogsService) {
        this.questionnaires = this.apiService.getQuestionnaireList();
    }

    ngOnInit() {}

    remove(id) {
        this.dialogsService
            .confirm('Confirm Delete', 'Are you sure you want delete question?')
            .subscribe(res => res && this.apiService.removeQuestionnaire(id));
    }

}
