import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { NetworkComponent } from './network/network.component';
import { FreindsComponent } from './freinds/freinds.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FetchResponseService } from './fetch-response.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { FetchUserNamePipe } from './fetch-user-name.pipe';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';





@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotComponent,
    HomeComponent,
    NetworkComponent,
    FreindsComponent,
    SettingsComponent,
    UsersComponent,
    ForgotPasswordComponent,
    ProfilePageComponent,
    HeaderComponent,
    FetchUserNamePipe,
    ProfileSettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FetchResponseService,
  {
    provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
