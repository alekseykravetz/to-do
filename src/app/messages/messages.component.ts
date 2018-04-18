import { ITodoItem } from './../todo-item';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(
    public messageService: MessageService,
    private dataService: AppDataService) { }

  ngOnInit() {
  }

  printAppData() {
     this.dataService.getTodos().subscribe(todos => {
       todos.forEach(todo => {
         const thisTodo = todo as ITodoItem;
         this.messageService.add(`Title: ${thisTodo.title} Description: ${thisTodo.description} Checked: ${thisTodo.checked}`);
       });
     });

  }

}
