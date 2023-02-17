import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovoLayoutAreaDeTrabalhoComponent } from './novo-layout-area-de-trabalho/novo-layout-area-de-trabalho.component';

@NgModule({
  declarations: [
    AppComponent,
    NovoLayoutAreaDeTrabalhoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
