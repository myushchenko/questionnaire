import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
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

  constructor(public af: AngularFire, private route: ActivatedRoute,
        private router: Router) { }

  ngOnInit() {
        this.subRoter = this.route.params.subscribe(params => {
            const id = params['id'];
            this.af.database.object(`responses/${id}`).subscribe(response => {
                this.questionnaire = response;
            });
            this.responseQiestionsList = this.af.database.list(`responses/${id}/questions`);
        });
    }

}
