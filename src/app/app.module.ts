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
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import {HttpClientModule} from '@angular/common/http';

import { JarwisService } from './services/jarwis.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { VendorComponent } from './components/vendor/vendor.component';

import { BillsComponent } from './components/bills/bills.component';
import { UptproComponent } from './components/uptpro/uptpro.component';
import { CreditLimitService } from './services/credit-limit.service';
import { NgxUiLoaderConfig, NgxUiLoaderModule, PB_DIRECTION, POSITION, SPINNER } from 'ngx-ui-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightDirective } from './highlight.directive';
import { NewComponent } from './new/new.component';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { BusinessComponent } from './components/business/business.component';
import { ContComponent } from './components/cont/cont.component';
import { EmailComponent } from './components/email/email.component';
import { CodeComponent } from './components/code/code.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';

const ngxuiloadconfig:NgxUiLoaderConfig = {
  bgsColor:'red',
  bgsPosition:POSITION.bottomCenter,
  bgsSize:40,
  bgsType:SPINNER.threeStrings,
  fgsType:SPINNER.threeStrings,
  fgsSize:200,
  fgsColor:'black',
  pbDirection:PB_DIRECTION.leftToRight,
  pbThickness:0,
  overlayColor:'rbga(20,20,20.6)'
}
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
    
    BillsComponent,
    UptproComponent,
    HighlightDirective,
    NewComponent,
    BusinessComponent,
    ContComponent,
    EmailComponent,
    CodeComponent,
    RequestResetComponent,
    ResponseResetComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxuiloadconfig),
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreRouterConnectingModule.forRoot()
    
  ],
   providers: [JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService,CreditLimitService],
  bootstrap: [AppComponent]
})
export class AppModule { }


// export class User{
//   private _url = ""
// }