import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Token } from 'src/core/model/token.model';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: Observable<Token>; z
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
