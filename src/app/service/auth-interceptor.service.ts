import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let token = null;
    this.authService.user.pipe(take(1)).subscribe(
      (user) => {
        if (!user) {

          return next.handle(req);
        }
        token = user.token;
      });

    let searchParams = new HttpParams();
    searchParams.append('auth', token);
    const modifiedRequest = req.clone({ params: searchParams });


    return next.handle(modifiedRequest);
  }

}