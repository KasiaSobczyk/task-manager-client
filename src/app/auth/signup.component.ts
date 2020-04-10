import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  url: string;
  submitted = false;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [''],
      password: ['']
    });
    this.url = this.activatedRoute.snapshot.queryParams['url'] || '/';
  }

  get signupForm() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    const username = this.signupForm.username.value;
    const password = this.signupForm.password.value;
    this.authService.signUp(username, password).pipe(first())
      .subscribe(res => this.router.navigate([this.url]));
  }

}
