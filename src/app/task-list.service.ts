import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  private tasks: Task[] = [
    {
      "id": 1,
      "name": "Task 1",
      "completed": false
    },
    {
      "id": 2,
      "name": "Task 2",
      "completed": false
    }
  ]

  constructor() {}

  getTasks(): Task[] {
    return this.tasks
  }
}