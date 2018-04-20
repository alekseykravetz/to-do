import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AccordionModule } from 'primeng/accordion';     // accordion and accordion tab
import { MenuItem, SelectItem } from 'primeng/api';                 // api
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';

import { AppRoutingModule } from './app-routing.module';
import { MessageService } from './message.service';
import { AppDataService } from './app-data.service';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { TodosComponent } from './todos/todos.component';
import { TodosItemComponent } from './todos-item/todos-item.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    TodosComponent,
    TodosItemComponent,
    TodoItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    ButtonModule,
    TooltipModule,
    AccordionModule,
    DropdownModule,
    CheckboxModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,

    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebase, 'to-do'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
  ],
  providers: [
    MessageService,
    AppDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
