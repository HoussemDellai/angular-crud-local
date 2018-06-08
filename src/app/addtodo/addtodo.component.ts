import { Component, OnInit } from '@angular/core';
import { TodoRepositoryService } from '../todo-repository.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  newTodo = new Todo(1, "new todo", false, new Date());

  constructor(private repository: TodoRepositoryService) { }

  addTodo(title: string, isDone: boolean): void{
    let todo = new Todo(1, title, isDone, new Date());
    this.repository.add(todo);
  }

  addNewTodo(): void{
    this.repository.add(this.newTodo);
  }

  ngOnInit() {
  }

}
