import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _http:HttpClient) { }

  //adding new User

  public addUser(user:any){
    return this._http.post(`${baseUrl}/api/v1/auth/user/signup`,user);
  }
}
