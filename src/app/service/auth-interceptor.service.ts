import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { take } from 'rxjs/operators';
import { User } from '../model/user.model';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let access_token = null;
    this.authService.user.pipe(take(1)).subscribe(
      (user: User) => {
        if (!user) {

          return next.handle(req);
        }
        access_token = user.access_token;
      });

    let header = new HttpHeaders();
    header.append('Authorization: Bearer ', access_token);
    const modifiedRequest = req.clone({ headers: header });


    return next.handle(modifiedRequest);
  }

}