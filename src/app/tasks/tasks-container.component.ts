import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-container',
  templateUrl: './tasks-container.component.html'
})
export class TasksContainerComponent {

  constructor(private router: Router) { }

  add() {
    this.router.navigate(['create']);
  }
}
