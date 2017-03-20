import { Component, OnInit } from '@angular/core';
import { AngularFire } from "angularfire2";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-manage-questionnaire',
  templateUrl: './manage-questionnaire.component.html',
  styleUrls: ['./manage-questionnaire.component.css']
})
export class ManageQuestionnaireComponent implements OnInit {

  public questionnaire: any;
  private subRoter: any;
  
  constructor(public af: AngularFire, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subRoter = this.route.params.subscribe(params => {
        var id = params['id'];
        if (!id) {
            this.router.navigate(['manage']);
            return;
        }
        this.af.database.object(`questionnaires/${id}`)
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
