import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovoLayoutAreaDeTrabalhoComponent } from './novo-layout-area-de-trabalho/novo-layout-area-de-trabalho.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";

import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    NovoLayoutAreaDeTrabalhoComponent,
  ],
  imports: [
    ButtonModule,
    BrowserModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
