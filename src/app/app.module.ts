import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AuthFirebase } from './providers/auth.firebase';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FirebaseConfig } from './configs/firebase.config';
import { routes } from "./app.routes";
import { CreateComponent } from './create/create.component';
import { ManageComponent } from './manage/manage.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    routes,
    NgbModule.forRoot(),
    MaterialModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreateComponent,
    ManageComponent,
    AboutComponent
  ],
  providers: [AuthFirebase],
  bootstrap: [AppComponent]
})
export class AppModule { }
