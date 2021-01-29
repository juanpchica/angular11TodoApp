import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentTodosComponent } from './components/content-todos/content-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentTodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
