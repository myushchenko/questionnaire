import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-response-details',
    templateUrl: './response-details.component.html',
    styleUrls: ['./response-details.component.less']
})
export class ResponseDetailsComponent implements OnInit {

    private subRoter: any;
    public questionnaire: any;
    public responseQiestionsList: FirebaseListObservable<any[]>;

    constructor(public db: AngularFireDatabase, private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.subRoter = this.route.params.subscribe(params => {
            const id = params['id'];
            this.db.object(`responses/${id}`).subscribe(response => {
                this.questionnaire = response;
            });
            this.responseQiestionsList = this.db.list(`responses/${id}/questions`);
        });
    }

}
