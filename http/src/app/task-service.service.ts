import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ITaskData } from './ITaskData';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private httpClient: HttpClient) { }

  getTasks() {
    return this.httpClient
      .get<ITaskData[]>(`${environment.baseUrl}/api/tasks`)
  }
}
