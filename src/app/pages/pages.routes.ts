import { ProfileComponent } from './profile/profile.component';
import { PagePromisesComponent } from './page-promises/page-promises.component';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PageRxjsComponent } from './page-rxjs/page-rxjs.component';
import { AuthGuard } from './../services/services.index';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ AuthGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'}},
            { path: 'graphics', component: Graphics1Component, data: {title: 'Graphics'}},
            { path: 'progress', component: ProgressComponent, data: {title: 'Progress'}},
            { path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Account Settings'}},
            { path: 'profile', component: ProfileComponent, data: {title: 'Profile'}},
            { path: 'promises', component: PagePromisesComponent, data: {title: 'Promises'}},
            { path: 'rxjs', component: PageRxjsComponent, data: {title: 'Rxjs'}},
            { path: '', redirectTo: '/', pathMatch: 'full'},
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
