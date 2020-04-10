import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {

  constructor(public taskService: TasksService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(res => console.log(res));
  }

}
