import { Injectable } from '@angular/core';
import { ITodoItem } from './todo-item';

@Injectable()
export class AppDataService {

  todos: ITodoItem[];

  constructor() {
    this.todos = [];
    this.todos.push({
      title: 'first title',
      description: 'first description',
      checked: false,
      dueDate: new Date(2015, 5, 24)
    } as ITodoItem);
    this.todos.push({
      title: 'second title',
      description: 'second description',
      checked: false,
      dueDate: new Date(2015, 5, 24)
    } as ITodoItem);
    this.todos.push({
      title: 'third title',
      description: 'third description',
      checked: false,
      dueDate: new Date(2015, 5, 24)
    } as ITodoItem);
  }

}
