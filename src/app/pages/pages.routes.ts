import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { PagePromisesComponent } from './page-promises/page-promises.component';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PageRxjsComponent } from './page-rxjs/page-rxjs.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';

import { AuthGuard } from './../services/services.index';
import { AdminGuard } from './../services/guards/admin.guard';

const pagesRoutes: Routes = [
            { path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'}},
            { path: 'graphics', component: Graphics1Component, data: {title: 'Graphics'}},
            { path: 'progress', component: ProgressComponent, data: {title: 'Progress'}},
            { path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Account Settings'}},
            { path: 'promises', component: PagePromisesComponent, data: {title: 'Promises'}},
            { path: 'rxjs', component: PageRxjsComponent, data: {title: 'Rxjs'}},
            { path: 'profile', component: ProfileComponent, data: {title: 'Profile'}},
            { path: 'maps', component: GoogleMapsComponent, data: {title: 'Google Maps'}},
            { path: 'reactive-forms', component: ReactiveFormsComponent, data: {title: 'Reactive Forms'}},
            { path: 'template-driven-forms', component: TemplateDrivenFormsComponent, data: {title: 'Template Driven Forms'}},
            // Maintenance
            { path: 'users', component: UsersComponent, data: {title: 'Manage Users'}, canActivate: [AdminGuard] },

            { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
