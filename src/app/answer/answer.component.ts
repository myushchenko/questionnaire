import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from "angularfire2";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  public questionnaire: any;
  private subRoter: any;
  
  constructor(public af: AngularFire, private route: ActivatedRoute) { 
  
  }

  ngOnInit() {
    this.subRoter = this.route.params.subscribe(params => {
        this.af.database.object(`questionnaires/${params['id']}`)
          .subscribe(response=>{
              response.questions = response.questions.filter(q=>q.title);
              this.questionnaire = response;
          });
    });
  }

  ngOnDestroy() {
    this.subRoter.unsubscribe();
  }

}
