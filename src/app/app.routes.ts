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
import { AuthGuard } from './services/auth-guard.service';

export const router: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateComponent, canActivate: [AuthGuard] },
  { path: 'manage', component: ManageComponent, canActivate: [AuthGuard] },
  { path: 'manage/:id', component: ManageQuestionnaireComponent, canActivate: [AuthGuard] },
  { path: 'responses', component: ResponseComponent, canActivate: [AuthGuard] },
  { path: 'response/:id', component: ResponseDetailsComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'answer/:id', component: AnswerComponent, canActivate: [AuthGuard] }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
