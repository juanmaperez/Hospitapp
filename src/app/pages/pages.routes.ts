import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { ProgressComponent } from './progress/progress.component';

const pagesRoutes : Routes = [
    {
        path:'', 
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent},
            { path: 'graphics', component: Graphics1Component},
            { path: 'progress', component: ProgressComponent},
            { path: '', redirectTo:'/', pathMatch: 'full'},
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);