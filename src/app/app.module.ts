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

import { AppRoutingModule } from './app-routing.module';
import { MessageService } from './message.service';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { TestUiElementsComponent } from './test-ui-elements/test-ui-elements.component';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    TestUiElementsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    ButtonModule,
    TooltipModule,
    AccordionModule,
    DropdownModule,

    AppRoutingModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
