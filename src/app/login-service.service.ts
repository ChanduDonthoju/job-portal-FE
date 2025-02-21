import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';
 
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
 
  URL:string="http://localhost:8054/user";
 
 
  constructor(private http:HttpClient) { }
 
  addUser(user:User):Observable<any>{
    return this.http.post(this.URL+"/adduser",user,{responseType:'json'});
  }
 
  getAllUsers():Observable<any>{
    return this.http.get<any>(this.URL+"/getallusers");
  }
 
  validateUser(email:string,password:string):Observable<any>{
    const body = {
      email: email,
      password: password
    };
    return this.http.post(this.URL,body);
 
  }
 
 
}