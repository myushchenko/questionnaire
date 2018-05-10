import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-response-details',
    templateUrl: './response-details.component.html',
    styleUrls: ['./response-details.component.less']
})

export class ResponseDetailsComponent implements OnInit {
    public questionnaire: any;
    public responseQiestionsList: Observable<any[]>;

    private subRoter: any;

    constructor(public db: AngularFireDatabase, private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.subRoter = this.route.params.subscribe(params => {
            const id = params['id'];
            this.db
                .object(`responses/${id}`)
                .valueChanges()
                .subscribe(response => this.questionnaire = response);
            this.responseQiestionsList = this.db.list(`responses/${id}/questions`).valueChanges();
        });
    }
}
