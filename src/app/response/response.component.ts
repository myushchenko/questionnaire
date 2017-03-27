import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFire } from "angularfire2";

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.less']
})
export class ResponseComponent implements OnInit {

  public responseList: FirebaseListObservable<any>;

  constructor(public af: AngularFire) {
    this.responseList = this.af.database.list('/responses');
  }

  ngOnInit() {
  }

}
