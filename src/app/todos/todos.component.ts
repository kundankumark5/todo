import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  localItem: any;
  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
    // this.todos = [
    //   {
    //     Sno: 1,
    //     title: 'this is title 1',
    //     desc: 'description',
    //     active: true,
    //   },
    //   {
    //     Sno: 2,
    //     title: 'this is title 2',
    //     desc: 'description',
    //     active: true,
    //   },
    //   {
    //     Sno: 3,
    //     title: 'this is title 3',
    //     desc: 'description',
    //     active: true,
    //   },
    // ];
  }

  ngOnInit(): void {}
  deleteTodo(todo: Todo) {
    console.log(todo);
    const Index = this.todos.indexOf(todo);
    this.todos.splice(Index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo) {
    const Index = this.todos.indexOf(todo);
    console.log(todo);
    this.todos[Index].active = !this.todos[Index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
