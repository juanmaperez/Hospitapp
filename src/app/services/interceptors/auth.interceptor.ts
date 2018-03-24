import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  /* This function intercepts all the http request and add the token in header if they exist
  * @params: HttpRequest, HttpHandler
  * @return: Observable
  */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');

    const newRequest = req.clone({
      headers: req.headers.set('authorization', `${token}`)
    });

    return next.handle(newRequest);
  }


}
