import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';

import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component'

const miRuteo = [
  { path:'bienvenida', component: BienvenidaComponent },
  { path:'login', component: LoginComponent },
  { path:'', component: LoginComponent },
  { path:'**', component: ErrorComponent } //Error
];

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(miRuteo)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
