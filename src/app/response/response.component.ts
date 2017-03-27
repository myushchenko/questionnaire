import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.less']
})
export class ResponseComponent implements OnInit {

  public responseList: FirebaseListObservable<any>;

  constructor(private apiService: ApiService) {
    this.responseList = apiService.getReponseList();
  }

  ngOnInit() {}

}
