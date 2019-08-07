import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from '../model/user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable()
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) { }

  signUp(username: string, password: string) {

    return this.http.post<AuthResponseData>('http://localhost:8080/signup',
      {
        username: username,
        password: password

      }).pipe(catchError(this.handleError));
  }

  login(username: string, password: string) {
    console.log(username);
   let params = new URLSearchParams();
    params.append('username',username);
    params.append('password',password);    
    params.append('grant_type','password');
    params.append('client_id','client');
    let headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Basic '+btoa("client:secret")});
    return this.http.post('http://localhost:8080/oauth/token',
      params.toString(),
      { headers: headers }).pipe(catchError(this.handleError), tap(resData => {
        this.handleAuthentication(username, resData);
      }));

  }

  private handleAuthentication(username: string, resData: any) {
    const expirationDate = new Date(new Date().getTime() + resData.expires_in + 900000);
    console.log(expirationDate);
    const user = new User(username, resData.access_token, resData.token_type,resData.refresh_token,resData.scope, expirationDate);
    this.user.next(user);
    console.log(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {

    let errorMessage = 'An unknown error has occured';
    console.log(errorRes.error.error.message);
    if (!errorRes.error || !errorRes.error.error) return throwError(errorMessage);
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;

      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email is not registered';
        break;

      case 'INVALID_PASSWORD':
        errorMessage = 'This email and password do not match';
        break;
    }
    return throwError(errorMessage);
  }


  logout() {
    this.user.next(null);
    localStorage.removeItem('userData');
    this.router.navigate(['/auth']);
  }
}
