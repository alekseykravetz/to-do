import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {

  newTitle = '';
  newDescription = '';

  todoItems: Observable<any[]>;

  constructor(
    public dataService: AppDataService,
    private messageService: MessageService) {
  }

  ngOnInit() {
    this.todoItems = this.dataService.getTodos();
  }

  addTodo() {
    this.messageService.add('addTodo() - ' + this.newTitle);

    this.dataService.addTodo({
      title: this.newTitle,
      description: this.newDescription,
      checked: false,
      dueDate: new Date(2015, 5, 24),
      id: '',
    });

    this.newTitle = '';
    this.newDescription = '';
  }

  isNewTitleExist() {
    this.messageService.add('isNewTitleExist() - ' + this.newTitle);

    return this.newTitle === '';
  }

}
