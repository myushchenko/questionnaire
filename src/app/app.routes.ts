import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CreateComponent } from "./create/create.component";
import { ManageComponent } from "./manage/manage.component";
import { AboutComponent } from "./about/about.component";

export const router: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'about', component: AboutComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
