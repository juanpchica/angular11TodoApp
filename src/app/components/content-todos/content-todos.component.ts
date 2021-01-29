import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-todos',
  templateUrl: './content-todos.component.html',
  styleUrls: ['./content-todos.component.css']
})
export class ContentTodosComponent implements OnInit {

  title: string = '';

  todos: Object[] = [
    {
      id:1,
      title:"The first item",
      description:"This will be your first item to add in your "
    },
    {
      id:2,
      title:"The second item",
      description:"This will be your second item to add in your "
    },
    {
      id:3,
      title:"The Third item",
      description:"This will be your Third item to add in your "
    },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(){
    this.todos = [...this.todos,{title:this.title}];
    //this.todos.push({title:this.title});
  }

}
