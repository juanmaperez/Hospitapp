import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ModalUploadComponent } from './../components/modal-upload/modal-upload.component';


import { PipesModule } from './../pipes/pipes.module';


@NgModule({
    declarations: [
        HeaderComponent,
        BreadcrumbsComponent,
        SidebarComponent,
        NopagefoundComponent,
        ModalUploadComponent,
    ],
    exports: [
        HeaderComponent,
        BreadcrumbsComponent,
        SidebarComponent,
        NopagefoundComponent,
        ModalUploadComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        PipesModule
    ],
})
export class SharedModule {}
