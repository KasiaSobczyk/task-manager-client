import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/auth.model';
import { environment } from 'src/environments/environment';
import { Token } from 'src/app/shared/models/token.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: Observable<Token>;
  private currentUserSubject: BehaviorSubject<Token>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Token>({
      accessToken: localStorage.getItem('accessToken'),
      refreshToken: localStorage.getItem('refreshToken')
    });
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Token {
    return this.currentUserSubject.value;
  }

  signUp(username: string, password: string) {
    return this.http.post<void>(`${environment.apiUrl}/auth/signup`, { username, password });
  }

  login(username: string, password: string) {
    return this.http.post<Token>(`${environment.apiUrl}/auth/signIn`, { username, password })
      .pipe(map((res: Token) => {
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
        this.currentUserSubject.next(res);
        return res;
      }));
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.currentUserSubject.next(null);
  }
}
