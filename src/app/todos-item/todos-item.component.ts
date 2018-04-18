import { ITodoItem } from './../todo-item';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppDataService } from '../app-data.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css'],
})
export class TodosItemComponent implements OnInit {

  @Input() todosItem: ITodoItem;

  constructor(
    private dataService: AppDataService) {
  }

  ngOnInit() {
  }

  onChecked() {
    this.dataService.updateTodo(this.todosItem);
  }

}
