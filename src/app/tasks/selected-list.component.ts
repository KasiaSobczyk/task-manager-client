import { Component, OnInit } from '@angular/core';
import { Task } from '@app/core/model/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-selected-list',
  templateUrl: './selected-list.component.html'
})
export class SelectedListComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(res => this.tasks = res as Task[]);
  }


}
