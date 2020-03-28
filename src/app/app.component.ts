import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { User } from './auth/models/auth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Frontend';
  public accessToken: string;

  constructor(
    private router: Router,
    private authenticationService: AuthService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.accessToken = x.accessToken);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
