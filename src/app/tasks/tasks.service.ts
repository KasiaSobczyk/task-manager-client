import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Task } from '@app/core/model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  addTask(title: string, description: string) {
    return this.http.post<Task>(`${environment.apiUrl}/tasks`, { title, description });
  }

  getTasks() {
    return this.http.get(`${environment.apiUrl}/tasks`);
  }
}
