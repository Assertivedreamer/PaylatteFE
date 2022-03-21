import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent } from '../app/components/login/login.component'
import {HomeComponent} from '../app/components/home/home.component'
import {PageNotFoundComponent} from '../app/components/page-not-found/page-not-found.component'
import { RegisterComponent } from './components/register/register.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component'
import {DashboardComponent} from './components/dashboard/dashboard.component'
import {VendorComponent} from './components/vendor/vendor.component'
import { PayComponent } from './components/pay/pay.component';
import { TransComponent } from './components/trans/trans.component';

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
    path:'vendor', 
    component: VendorComponent,
    canActivate: [AfterLoginService]
  },
  {
    path:'pay', 
    component: PayComponent,
    canActivate: [AfterLoginService]
  },
  {
    path:'dashboard', 
    component: DashboardComponent,
    canActivate: [AfterLoginService]

  },
  {
    path:'trans', 
    component: TransComponent,
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
