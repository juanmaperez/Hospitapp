import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { PagesModule } from './pages/pages.module';
import { ServicesModule } from './services/services.module';


import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
