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
    this.todoApi.getTodos().subscribe((data)=>{
      console.log(data);
      this.todos = data;
    });
  }

  toggleCompleted(todoItem:Todo){
    //console.log(todoItem);
    this.todoApi.toggleCompleted(todoItem).subscribe((data)=>{
      console.log(data);
    });
  }

  removeTodo(todoItem:Todo){
    console.log(todoItem);
    
    this.todoApi.deleteTodo(todoItem).subscribe((data)=>{
      console.log(data);
      this.todos = this.todos.filter((todo)=>todo.id !== todoItem.id);
    })
  }

  addItem(todoItem:Todo){
    console.log(todoItem);
    this.todoApi.addTodo(todoItem).subscribe(data=>{
      this.todos = [...this.todos,data]
    })
  }
}
