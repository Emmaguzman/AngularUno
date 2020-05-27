import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';

const pagesRoutes:Routes=[
    { path:'',
    component:PagesComponent,
    children:[
      {path:'progress',component:ProgressComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'graficas1',component:Graficas1Component},
      {path:'',redirectTo:'/dashboard',pathMatch:'full'}
    ]},
];

export const PAGES_ROUTES=RouterModule.forChild(pagesRoutes);