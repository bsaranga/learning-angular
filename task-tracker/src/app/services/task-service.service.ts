import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import ITask from '../itask';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private tasksResource = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) { }

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.tasksResource);
  }

  deleteTask(task: ITask): Observable<ITask> {
    const url = `${this.tasksResource}/${task.id}`;
    return this.http.delete<ITask>(url);
  }
}
