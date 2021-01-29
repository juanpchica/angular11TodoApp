import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentTodosComponent } from './components/content-todos/content-todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { AddnewTodoComponent } from './components/addnew-todo/addnew-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentTodosComponent,
    TodoComponent,
    AboutComponent,
    AddnewTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
