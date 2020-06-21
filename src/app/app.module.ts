import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ButtonDisplayComponent } from './button-display/button-display.component';
import { DbDisplayComponent } from './db-display/db-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonDisplayComponent,
    DbDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
