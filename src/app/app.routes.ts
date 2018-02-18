import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graphics1Component } from './pages/graphics1/graphics1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const routes : Routes = [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: LoginComponent},
    { path: 'graphics', component: Graphics1Component},
    { path: 'progress', component: ProgressComponent},
    { path: '', redirectTo:'/dashboard', pathMatch: 'full'},
    { path: '**', component: NopagefoundComponent},
]

export const APP_ROUTES = RouterModule.forRoot( routes, { useHash : true})