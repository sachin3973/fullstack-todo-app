import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/Todo';
import { TodoService } from 'src/app/service/todo.service';
// import {v4 as uuidv4} from "uuid";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})

export class TodoFormComponent implements OnInit {
  todoTitle!: string;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    
  }

  handleAdd() {
    if(this.todoTitle) {
      const newTodo:Todo = {
        id: '12323',
        title: this.todoTitle,
        date: new Date(),
        isComplete: false
      }
  
      this.todoService.addTodo(newTodo);
      this.todoTitle = "";
    }
    
  }

}
function uuidv4(): string {
  throw new Error('Function not implemented.');
}

