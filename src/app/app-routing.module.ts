import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent } from '../app/components/login/login.component'
import {HomeComponent} from '../app/components/home/home.component'
import {PageNotFoundComponent} from '../app/components/page-not-found/page-not-found.component'
import { RegisterComponent } from './components/register/register.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component'
import {DashboardComponent} from './components/dashboard/dashboard.component'
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch:'full'
  },
  {
    path:'login', 
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path:'register', 
    component: RegisterComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path:'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path:'dashboard', 
    component: DashboardComponent,
    canActivate: [AfterLoginService]

  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
