import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let token = null;
    let userObj;
    this.authService.user.pipe(take(1)).subscribe(
      (user) => {
        if (!!user) {
          token = user.access_token;
        }
      });
    if (!token) {
          return next.handle(req);
        }


    const modifiedRequest = req.clone({ headers: new HttpHeaders({
      'Authorization': 'Bearer '+ token
    }) });


    return next.handle(modifiedRequest);
  }

}