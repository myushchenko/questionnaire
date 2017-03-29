import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { ResponseComponent } from './response/response.component';
import { ResponseDetailsComponent } from './response-details/response-details.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { DatepickerModule } from 'angular2-material-datepicker';
import { FilterPipe } from './pipes/filter.pipe';
import { QuestionnaireService } from './services/questionnaire.service';
import { ResponseService } from './services/response.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(FirebaseConfig),
        routes,
        NgbModule.forRoot(),
        ReactiveFormsModule,
        MaterialModule,
        DatepickerModule
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
        ConfirmDialog,
        ResponseComponent,
        ResponseDetailsComponent,
        FilterPipe
    ],
    entryComponents: [AddQuestionModalComponent, ConfirmDialog],
    providers: [AuthGuard, AuthService, AuthFirebase, QuestionnaireService, ResponseService, DialogsService, QuestionService],
    bootstrap: [AppComponent]
})
export class AppModule { }
