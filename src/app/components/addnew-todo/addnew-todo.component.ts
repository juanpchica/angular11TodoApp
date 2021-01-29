import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-addnew-todo',
  templateUrl: './addnew-todo.component.html',
  styleUrls: ['./addnew-todo.component.css']
})
export class AddnewTodoComponent implements OnInit {
  title: "";
  @Output() addItem = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit(): void {
  }

  addTodo(){
    const todo:Todo = {
      id:1,
      userId:2,
      title:this.title,
      complete:true
    }
    this.addItem.emit(todo);
  }

}
