import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent {

  constructor(private router: Router) { }

  add() {
    this.router.navigate(['create']);
  }
}
