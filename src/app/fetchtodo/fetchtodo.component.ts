import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoRepositoryService } from '../todo-repository.service';

@Component({
  selector: 'app-fetchtodo',
  templateUrl: './fetchtodo.component.html',
  styleUrls: ['./fetchtodo.component.css']
})
export class FetchtodoComponent implements OnInit {

  todoes: Todo[];

  constructor(private repository: TodoRepositoryService) { }

  ngOnInit() {
    this.todoes = this.repository.getAll();
  }

  // public refresh(){
  //   this.todoes = this.repository.getAll();
  // }
}
