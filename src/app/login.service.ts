import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  alog=false;
  slog=false;
  constructor(private http:HttpClient) { }

  login(student:any):Observable<any>
  {
    return this.http.post(`http://localhost:8901/ssp/student/login`,student)
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  } 

  loginNav(){
    let user = sessionStorage.getItem('email')
    if(user === "admin"){
      this.alog=true;
    }
    return this.alog;   
  }
  

  logOut() {
    sessionStorage.removeItem('email')
  }

  adminLogin(email:string,password:string){
    /*=== (Triple equals) is a strict equality comparison operator in JavaScript, 
    which returns false for the values which are not of a similar type.*/
   if (email === "admin" && password === "cfg@1234") {
      sessionStorage.setItem('email', email)
      return true;
    } 
    else {
      return false;
    }
  }

}
