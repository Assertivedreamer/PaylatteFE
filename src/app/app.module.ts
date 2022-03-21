import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import {HttpClientModule} from '@angular/common/http';

import { JarwisService } from './services/jarwis.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { VendorComponent } from './components/vendor/vendor.component';
import { TransComponent } from './components/trans/trans.component';
import { PayComponent } from './components/pay/pay.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    
    FooterComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    VendorComponent,
    TransComponent,
    PayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    HttpClientModule
  ],
   providers: [JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
