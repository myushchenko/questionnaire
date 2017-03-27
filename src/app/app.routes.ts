import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { ManageComponent } from './manage/manage.component';
import { AboutComponent } from './about/about.component';
import { AnswerComponent } from './answer/answer.component';
import { ManageQuestionnaireComponent } from './manage-questionnaire/manage-questionnaire.component';
import { ResponseComponent } from './response/response.component';
import { ResponseDetailsComponent } from './response-details/response-details.component';

export const router: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'manage/:id', component: ManageQuestionnaireComponent },
  { path: 'responses', component: ResponseComponent },
  { path: 'response/:id', component: ResponseDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'answer/:id', component: AnswerComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
