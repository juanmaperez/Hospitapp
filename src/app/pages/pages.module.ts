import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PipesModule } from './../pipes/pipes.module';


import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';

import { PAGES_ROUTES } from './pages.routes';

import { ChartsModule } from 'ng2-charts';


// temporal
import { IncrementatorComponent } from '../components/incrementator/incrementator.component';
import { DonutChartComponent } from '../components/donut-chart/donut-chart.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PagePromisesComponent } from './page-promises/page-promises.component';
import { PageRxjsComponent } from './page-rxjs/page-rxjs.component';
import { ProfileComponent } from './profile/profile.component';

import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';

import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';


@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        IncrementatorComponent,
        DonutChartComponent,
        AccountSettingsComponent,
        PagePromisesComponent,
        PageRxjsComponent,
        ProfileComponent,
        UsersComponent,
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component
    ],
    imports: [
        PAGES_ROUTES,
        SharedModule,
        FormsModule,
        ChartsModule,
        PipesModule,
        CommonModule,

    ]
})


export class PagesModule {}
