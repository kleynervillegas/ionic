import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public localStorage: any;
  constructor() { }
  public setItem(token,user) {
      user = jwt_decode(user);
      this.localStorage=   localStorage.setItem('token', token);
      this.localStorage=   localStorage.setItem('user', JSON.stringify(user));
  }

  public getIToken(){
    return localStorage.getItem('token');
  }
  public getIDataUser(){
    return JSON.parse(localStorage.getItem('user'));
  }
}
