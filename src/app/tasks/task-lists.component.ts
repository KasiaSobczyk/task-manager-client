import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html'
})
export class TaskListsComponent implements OnInit {
  list = [];
  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
  }

}
