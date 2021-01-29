import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-content-todos',
  templateUrl: './content-todos.component.html',
  styleUrls: ['./content-todos.component.css']
})
export class ContentTodosComponent implements OnInit {

  title: string = '';

  todos: Todo[] = [
    {
      id:1,
      title:"The first item",
      active:true
    },
    {
      id:2,
      title:"The second item",
      active:false
    },
    {
      id:3,
      title:"The Third item",
      active:true
    },
    
  ];

  constructor() { }

  ngOnInit(): void {
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
