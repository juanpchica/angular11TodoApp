import { Injectable } from '@angular/core';
import { Todo } from '../Todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions =  {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})


export class TodoAPIService {
  todosURL = 'https://jsonplaceholder.typicode.com/todos/';
  todosLimit = '?_limit=5';
  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.todosURL+this.todosLimit);
  }

  toggleCompleted(todo:Todo):Observable<any>{
    const url = this.todosURL+"/"+todo.id;
    return this.http.put(url,todo,httpOptions);
  }

  deleteTodo(todo:Todo):Observable<any>{
    const url = this.todosURL+"/"+todo.id;
    return this.http.delete(url,httpOptions);
  }


}
