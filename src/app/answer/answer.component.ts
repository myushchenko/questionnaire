import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from "angularfire2";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  public questionnaire: any;
  public questions: any;
  private subRoter: any;
  
  constructor(public af: AngularFire, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subRoter = this.route.params.subscribe(params => {
        let id = params['id'];
        this.af.database.object(`questionnaires/${id}`).subscribe(response => {
          this.questionnaire = response;
        });
        this.questions = this.af.database.list(`questionnaires/${id}/questions`);
    });
  }

  ngOnDestroy() {
    this.subRoter.unsubscribe();
  }
  
  submit() {
      console.log('submit');
  }

}
