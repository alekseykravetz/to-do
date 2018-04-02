import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  newTitle = '';

  constructor(
    public dataService: AppDataService,
    private messageService: MessageService) { }

  ngOnInit() {
  }

  addTodo() {
    this.messageService.add('addTodo() - ' + this.newTitle);
    this.dataService.todos.push({ title: this.newTitle, checked: false });
    this.newTitle = '';
  }

  isNewTitleExist() {
    this.messageService.add('isNewTitleExist() - ' + this.newTitle);
    return this.newTitle === '';

  }
}
