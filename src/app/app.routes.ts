import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graphics1Component } from './pages/graphics1/graphics1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './register/register.component';


const routes : Routes = [
    { 
        path:'', 
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent},
            { path: 'graphics', component: Graphics1Component},
            { path: 'progress', component: ProgressComponent},
            { path: '', redirectTo:'/', pathMatch: 'full'},
        ]
    },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},

    { path: '**', component: NopagefoundComponent},
]

export const APP_ROUTES = RouterModule.forRoot( routes, { useHash : true})