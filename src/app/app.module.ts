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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent  
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
