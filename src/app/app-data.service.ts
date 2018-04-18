import { Injectable } from '@angular/core';
import { ITodoItem } from './todo-item';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from '@firebase/util';


@Injectable()
export class AppDataService {

  constructor(
    public db: AngularFirestore) {
  }

  getTodos() {
    return this.db.collection('/todos').valueChanges();
  }

  addTodo(todoItem: ITodoItem) {
    todoItem.id = this.db.createId();
    return this.db.collection('/todos').doc(todoItem.id).set(todoItem);
  }

  updateTodo(todoItem: ITodoItem) {
    return this.db.collection('/todos').doc(todoItem.id).set(todoItem);
  }

  getTodo(id: string) {
    return this.db.doc<ITodoItem>('/todos/' + id).valueChanges();
  }

}
