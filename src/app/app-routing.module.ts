import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent } from '../app/components/login/login.component'
import {HomeComponent} from '../app/components/home/home.component'
import {PageNotFoundComponent} from '../app/components/page-not-found/page-not-found.component'
import { RegisterComponent } from './components/register/register.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component'
import {DashboardComponent} from './components/dashboard/dashboard.component'
import {VendorComponent} from './components/vendor/vendor.component'

import { BillsComponent } from './components/bills/bills.component';
import { UptproComponent } from './components/uptpro/uptpro.component';

import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { BusinessComponent } from './components/business/business.component';
import { ContComponent } from './components/cont/cont.component';
import { EmailComponent } from './components/email/email.component';
import { CodeComponent } from './components/code/code.component';

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
    path:'Bills', 
    component: BillsComponent,
    canActivate: [AfterLoginService]
  },
  {
    path:'dashboard', 
    component: DashboardComponent,
    canActivate: [AfterLoginService]

  },
  {
    path:'Uptpro', 
    component: UptproComponent,
    canActivate: [AfterLoginService]

  },
  {
    path:'business', 
    component: BusinessComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path:'con', 
    component: ContComponent,
    canActivate: [BeforeLoginService]
  },

  {
    path:'em', 
    component: EmailComponent,
    canActivate: [BeforeLoginService]
  },

  
  {
    path:'code', 
    component: CodeComponent,
    canActivate: [BeforeLoginService]
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
