import { Component, OnInit } from '@angular/core';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {

  constructor(public taskService: TasksService) { }
 tasks = [];
  ngOnInit(): void {
   this.taskService.getTasks().subscribe( res => console.log(res));
  }

}
