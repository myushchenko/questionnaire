import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AuthFirebase } from './providers/auth.firebase';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FirebaseConfig } from './configs/firebase.config';
import { routes } from './app.routes';
import { CreateComponent } from './create/create.component';
import { ManageComponent } from './manage/manage.component';
import { AboutComponent } from './about/about.component';
import { AnswerComponent } from './answer/answer.component';
import { QuestionTypeComponent } from './question-type/question-type.component';
import { AddQuestionModalComponent } from './add-question-modal/add-question-modal.component';
import { ManageQuestionnaireComponent } from './manage-questionnaire/manage-questionnaire.component';
import { DialogsService } from './services/dialogs.service';
import { ConfirmDialog } from './shared/confirm-dialog.component';
import { QuestionService } from './services/question.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    routes,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
        ConfirmDialog,
    ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreateComponent,
    ManageComponent,
    AboutComponent,
    AnswerComponent,
    QuestionTypeComponent,
    AddQuestionModalComponent,
    ManageQuestionnaireComponent,
    ConfirmDialog
  ],
  entryComponents: [AddQuestionModalComponent, ConfirmDialog],
  providers: [AuthFirebase, DialogsService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
