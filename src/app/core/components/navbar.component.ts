import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  username: string;
  constructor(
    private router: Router,
    private authenticationService: AuthService
  ) { }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
