import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { PagesModule } from './pages/pages.module';
import { ServicesModule } from './services/services.module';


import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    ServicesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
