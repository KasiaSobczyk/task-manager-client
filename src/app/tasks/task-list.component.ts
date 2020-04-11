import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';
import { Task } from '@app/core/model/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(res => this.tasks = res as Task[]);
  }

}
