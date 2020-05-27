import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FreindsComponent } from './freinds/freinds.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NetworkComponent } from './network/network.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './auth.guard';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';


const routes: Routes =
  [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrationComponent },
    { path: 'forgot', component: ForgotComponent },
    { path: 'reset', component: ForgotPasswordComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'network', component: NetworkComponent, canActivate: [AuthGuard] },
    { path: 'friends', component: FreindsComponent, canActivate: [AuthGuard] },
    { path: 'settings', 
      component: SettingsComponent,
      canActivate: [AuthGuard],
      children: [
        {path: 'profile', component: ProfileSettingComponent},
        {path: 'password', component: ForgotPasswordComponent},
        {path: '**', component: ProfileSettingComponent}
      ] 
    },
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
    { path: '**', component: LoginComponent }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
