import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-addnew-todo',
  templateUrl: './addnew-todo.component.html',
  styleUrls: ['./addnew-todo.component.css']
})
export class AddnewTodoComponent implements OnInit {
  title: "";
  @Output() addItem = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  addTodo(){
    const todo:Todo = {
      userId:1,
      id: new Date().getTime(),
      title:this.title,
      complete:true
    }
    this.addItem.emit(todo);
    this.title="";
  }

}
