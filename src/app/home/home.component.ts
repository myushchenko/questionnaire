import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit {
  public questionnaireList: FirebaseListObservable<any>;

  constructor(public af: AngularFire, private authService: AuthService) {
    this.questionnaireList = this.af.database.list('/questionnaires');
    console.log('home: ', this.authService.currentUser);
  }

  ngOnInit() {}
}
