import { Injectable } from '@angular/core';
import { ITodoItem } from './todo-item';

@Injectable()
export class AppDataService {

  todos: ITodoItem[];

  constructor() {
    this.todos = [];
    this.todos.push({ title: 'first title', checked: false });
    this.todos.push({ title: 'second title', checked: false });
    this.todos.push({ title: 'third title', checked: false });
  }

}
