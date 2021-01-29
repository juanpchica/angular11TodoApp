import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo:Todo; 

  @Output() removeTodo = new EventEmitter<Todo>();
  
  constructor() { }

  ngOnInit(): void {
  }

  validateClasses = () => {
    return {"inactive":!this.todo.active};
  }
  
  RemoveItem(todo:Todo){
    this.removeTodo.emit(todo);
  }
}
