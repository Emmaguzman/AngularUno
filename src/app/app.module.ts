import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//RUTAS
import { AppRoutingModule } from './app-routing.module';
//MODULOS
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
//COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { ProgressComponent } from './pages/progress/progress.component';
// import { Graficas1Component } from './pages/graficas1/graficas1.component';
// import { HeaderComponent } from './shared/header/header.component';
// import { SidebarComponent } from './shared/sidebar/sidebar.component';
// import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
// import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    //NopagefoundComponent,
    // DashboardComponent,
    // ProgressComponent,
    // Graficas1Component,
    //PagesComponent,
    //HeaderComponent,
    //SidebarComponent,
    //BreadcrumbsComponent,    
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule //<-Siempre al final
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
