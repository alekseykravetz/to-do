import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { AppDataService } from '../app-data.service';
import { ITodoItem } from './../todo-item';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {

  todo: ITodoItem;

  constructor(
    private dataService: AppDataService,
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit() {
    const itemId = this.route.snapshot.paramMap.get('id');
    if (itemId) {
      this.dataService.getTodo(itemId).subscribe(todo => {
        this.todo = todo;
      });
    }
  }

  save() {
    this.dataService.updateTodo(this.todo);
    this.goBack();
  }

  goBack() {
    this.location.back();
  }

}
