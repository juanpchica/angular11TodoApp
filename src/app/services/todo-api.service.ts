import { Injectable } from '@angular/core';
import { Todo } from '../Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoAPIService {
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

  getTodos(){
    return this.todos;
  }
}
