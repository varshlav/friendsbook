import { Injectable } from '@angular/core';
import { HttpInterceptor } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req, next){
    let token = '';
    if(localStorage.getItem('loginToken')){
      token = localStorage.getItem('loginToken');
    }
    
    let tokenizedReq = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer '+  token
      }
    });
    return next.handle(tokenizedReq);
  }
}
