import { Component } from '@angular/core';
import { AuthService } from '@app/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Frontend';
  public accessToken: string;

  constructor(
    private authenticationService: AuthService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.accessToken = x.accessToken);
  }
}
