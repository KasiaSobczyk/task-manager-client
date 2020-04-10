import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html'
})
export class CreateTaskComponent implements OnInit {
  form: FormGroup;
  url: string;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  get taskForm() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    const title = this.taskForm.title.value;
    const desc = this.taskForm.description.value;
    // this.authService.signUp(username, password).pipe(first())
    //   .subscribe(res => this.router.navigate([this.url]));
  }
}
