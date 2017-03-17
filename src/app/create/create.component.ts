import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from "@angular/material";
import { AngularFire, FirebaseListObservable } from "angularfire2";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  public questionnaires: FirebaseListObservable<any>;

  constructor(public af: AngularFire, public snackBar: MdSnackBar, private router: Router) { 
    this.questionnaires = this.af.database.list('/questionnaires');
  }

  ngOnInit() {}

  save(name: string, action: string) {
    this.questionnaires.push({
      date: new Date(),
      name: name,
      questions: []
    }).then(()=> {
      this.snackBar.open(name + ' has been created', '', {
        duration: 2000,
      }).afterDismissed().subscribe(() => {
        this.router.navigate(['/']);
      });
    });
  }
}