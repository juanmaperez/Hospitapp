import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './register/register.component';

import { PagesComponent } from './pages/pages.component';

import { AuthGuard } from './services/services.index';


const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    {
        path: '',
        component: PagesComponent,
        canActivateChild: [ AuthGuard ],
        loadChildren: './pages/pages.module#PagesModule'
    },
    { path: '**', component: NopagefoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot( routes, { useHash : true});
