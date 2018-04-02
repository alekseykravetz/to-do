import { Component, OnInit, Input } from '@angular/core';
import { ITodoItem } from '../todo-item';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: ITodoItem;

  constructor(
    private dataService: AppDataService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {

    /*     const title = this.route.snapshot.paramMap.get('title');
        if (title !== '') {
          this.todo = this.dataService.todos.find(todo => todo.title === title);
        } */

  }

}
