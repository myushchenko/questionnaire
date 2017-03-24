import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public questionnaires: FirebaseListObservable<any>;

  constructor(public af: AngularFire) {
    this.questionnaires = this.af.database.list('/questionnaires');
  }

  ngOnInit() {}
}
