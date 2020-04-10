import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loggedUser = this.authService.currentUserValue;
    if (loggedUser && loggedUser.accessToken && loggedUser.refreshToken) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${loggedUser.accessToken}`
        }
      });
    }
    return next.handle(req);
  }
}
