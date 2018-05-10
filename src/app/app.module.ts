import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import {
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatTabsModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatProgressSpinnerModule
} from '@angular/material';

import { routes } from './app.routes';
import { AuthFirebase } from './providers/auth.firebase';
import { FirebaseConfig } from './configs/firebase.config';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { ManageComponent } from './manage/manage.component';
import { AboutComponent } from './about/about.component';
import { AnswerComponent } from './answer/answer.component';
import { ConfirmDialog } from './shared/confirm-dialog.component';
import { ResponseComponent } from './response/response.component';
import { QuestionTypeComponent } from './question-type/question-type.component';
import { AddQuestionModalComponent } from './add-question-modal/add-question-modal.component';
import { ManageQuestionnaireComponent } from './manage-questionnaire/manage-questionnaire.component';
import { ResponseDetailsComponent } from './response-details/response-details.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { QuestionService } from './services/question.service';
import { QuestionnaireService } from './services/questionnaire.service';
import { ResponseService } from './services/response.service';
import { DialogsService } from './services/dialogs.service';

import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AngularFireModule.initializeApp(FirebaseConfig), // imports firebase/app needed for everything
        AngularFireDatabaseModule, // imports firebase/database, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features
        routes,
        ReactiveFormsModule,
        // materil
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatRadioModule,
        MatTabsModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatProgressSpinnerModule
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
        FilterPipe,
        RegistrationPageComponent
    ],
    entryComponents: [
        AddQuestionModalComponent,
        ConfirmDialog
    ],
    providers: [
        AuthGuard,
        AuthService,
        AuthFirebase,
        QuestionnaireService,
        ResponseService,
        DialogsService,
        QuestionService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
