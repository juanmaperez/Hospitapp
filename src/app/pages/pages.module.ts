import { MapModalComponent } from './../components/map-modal/map-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// External Modules.
import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { SharedModule } from '../shared/shared.module';
import { PipesModule } from './../pipes/pipes.module';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { MapComponent } from './../components/map/map.component';

import { PAGES_ROUTES } from './pages.routes';

// temporal
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { IncrementatorComponent } from '../components/incrementator/incrementator.component';
import { DonutChartComponent } from '../components/donut-chart/donut-chart.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PagePromisesComponent } from './page-promises/page-promises.component';
import { PageRxjsComponent } from './page-rxjs/page-rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';

import { environment } from '../../environments/environment';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { AnimationsComponent } from './animations/animations.component';
import { DirectivesComponent } from './directives/directives.component';
import { BasicHighlightDirective } from './directives/main-directives/basic-highlight.directive';
import { UnlessDirective } from './directives/main-directives/unless.directive';



@NgModule({
    entryComponents: [
        MapModalComponent
    ],
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
        GoogleMapsComponent,
        MapComponent,
        MapModalComponent,
        TemplateDrivenFormsComponent,
        ReactiveFormsComponent,
        AnimationsComponent,
        DirectivesComponent,
        BasicHighlightDirective,
        UnlessDirective,
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
        ReactiveFormsModule,
        ChartsModule,
        PipesModule,
        CommonModule,
        MatButtonModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatDialogModule,
        MatInputModule,
        AgmCoreModule.forRoot({
            apiKey: environment.google_api_key
        })
    ]
})


export class PagesModule {}
