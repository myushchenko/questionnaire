import { Component, OnInit } from '@angular/core';
import { AngularFire } from "angularfire2";
import { ActivatedRoute, Router } from "@angular/router";
import { QuestionService } from "../services/question.service";

@Component({
  selector: 'app-manage-questionnaire',
  templateUrl: './manage-questionnaire.component.html',
  styleUrls: ['./manage-questionnaire.component.css']
})
export class ManageQuestionnaireComponent implements OnInit {

  public questionnaire: any;
  private subRoter: any;
  public questionnaireId: any;
  public questions: any;

  constructor(public af: AngularFire, private route: ActivatedRoute,
    private router: Router, public questionService: QuestionService) { }

  ngOnInit() {

    this.subRoter = this.route.params.subscribe(params => {
      this.questionnaireId = params['id'];
      this.af.database.object(`questionnaires/${this.questionnaireId}`).subscribe(response => {
        this.questionnaire = response;
      });
      this.questions = this.af.database.list(`questionnaires/${this.questionnaireId}/questions`);
    });
  }

  ngOnDestroy() {
    this.subRoter.unsubscribe();
  }

  addQuestion() {
    this.questionService.addQuestion().subscribe(result => {
      if (result) {
        this.questions.push(result);
      }
    });
  }
}
