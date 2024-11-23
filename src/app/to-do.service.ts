import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class ToDoService {

  baseUrl : string = 'http://localhost:5052/';

  constructor(private _httpClient : HttpClient) { }

  createTask(param : any) : Observable<any>
  {
    return this._httpClient.post<any>(this.baseUrl+'api/todo/task/create',param,httpOptions).pipe(
      map(r => r)
    );
  }


  getAllTasks() : Observable<any>
  {
    return this._httpClient.get<any>(this.baseUrl+'api/todo/task/getAll',httpOptions).pipe(
      map(r => r)
    );
  }

  deleteTask(param : any)
  {
    return this._httpClient.post<any>(this.baseUrl+'api/todo/task/delete',param,httpOptions).pipe(
      map(r => r)
    );
  }
}
