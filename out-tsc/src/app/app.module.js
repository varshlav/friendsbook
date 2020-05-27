import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            RegistrationComponent,
            LoginComponent,
            ForgotComponent,
            HomeComponent,
            NetworkComponent,
            FreindsComponent,
            SettingsComponent,
            UsersComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map