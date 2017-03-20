import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFire } from "angularfire2";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})

export class ManageComponent implements OnInit {

  public questionnaires: FirebaseListObservable<any>;

  constructor(public af: AngularFire) { 
    this.questionnaires = this.af.database.list('/questionnaires');
  }

  ngOnInit() {
  }

}
