import { Injectable } from '@angular/core';
import { Todo } from './models/todo';

@Injectable()
export class TodoRepositoryService {

  todoes: Todo[] = [
    new Todo(1, "Create Angular App", true, new Date()),
    new Todo(2, "Invoke REST API", false, new Date()),
    new Todo(3, "Use HTTP Client", false, new Date()),
  ];
  
  constructor() { }

  getAll(): Todo[] {
    return this.todoes;
  }
  
  public add(todo: Todo){
    this.todoes.push(todo);
  }
  
}
