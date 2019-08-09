import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { take } from 'rxjs/operators';
import { User } from '../model/user.model';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    
    let userToken: User = null;
    this.authService.user.pipe(take(1)).subscribe(
      (user) => {
        if (!!user) {
          userToken = user;
        }
      });
    if (!userToken) {
          return next.handle(req);
        }


    const modifiedRequest = req.clone({ headers: new HttpHeaders({
      'Authorization': 'Bearer '+ userToken.access_token,
      'Username': userToken.email
    }) });


    return next.handle(modifiedRequest);
  }

}