import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class ApiService {

    private baseUrl: string;

    constructor(public af: AngularFire) {}

    public setBaseUrl(id) {
        this.baseUrl = `questionnaires/${id}`;
    }

    public udapteQuestionnaire() {
        this.af.database.object(this.baseUrl).update({ date: new Date() });
    }

    public udateQuestion(qId, question) {
        this.af.database.object(this.baseUrl + `/questions/${qId}`)
            .update(question).then( _ => this.udapteQuestionnaire());
    }

    public removeQuestion(qId) {
        this.af.database.object(this.baseUrl +  `/questions/${qId}`).remove();
    }
}
