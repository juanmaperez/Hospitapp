import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

import { ModalUploadService } from './../components/modal-upload/modal-upload.service';


import {
  SettingsService,
  SidebarService,
  SharedService,
  UserService,
  AuthGuard,
  AdminGuard,
  UploadFileService,
} from './services.index';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    UserService,
    AuthGuard,
    AdminGuard,
    UploadFileService,
    ModalUploadService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
    },
  ],
  declarations: []
})
export class ServicesModule { }
