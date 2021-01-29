import { Component, OnInit } from '@angular/core';
import { TodoAPIService } from 'src/app/services/todo-api.service';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-content-todos',
  templateUrl: './content-todos.component.html',
  styleUrls: ['./content-todos.component.css']
})
export class ContentTodosComponent implements OnInit {

  title: string = '';

  todos: Todo[];

  constructor(private todoApi:TodoAPIService) { }

  ngOnInit(): void {
    this.todos = this.todoApi.getTodos();
  }

  addTodo(){
    this.todos = [...this.todos,{id:5,title:this.title,active:true}];
    //this.todos.push({title:this.title});
  }

  removeTodo(todoItem:Todo){
    console.log(todoItem);
    this.todos = this.todos.filter((todo)=>todo.id !== todoItem.id);
  }

}
