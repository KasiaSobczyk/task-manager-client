import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { first } from 'rxjs/operators';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html'
})
export class CreateTaskComponent implements OnInit {
  form: FormGroup;
  url: string;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private taskService: TasksService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  get taskForm() {
    return this.form.controls;
  }

  createTask() {
    this.submitted = true;
    if (this.taskForm.invalid) { return; }
    const title = this.taskForm.title.value;
    const desc = this.taskForm.description.value;
    this.taskService.addTask(title, desc).pipe(first())
      .subscribe(res => this.router.navigate(['tasks']));
  }
}
