import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestUiElementsComponent } from './test-ui-elements/test-ui-elements.component';
import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'testui', component: TestUiElementsComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'todoitem/:id', component: TodoItemComponent },
  { path: 'todoitem', component: TodoItemComponent }
];

/* { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent } */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
