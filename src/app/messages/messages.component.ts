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
    this.dataService.todos
      .forEach(todo => this.messageService.add(`Title: ${todo.title} Description: ${todo.description} Checked: ${todo.checked}`));
  }

}
