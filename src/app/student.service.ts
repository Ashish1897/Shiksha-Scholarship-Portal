import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl="http://localhost:8901/ssp/student"

  constructor(private http:HttpClient) { }

  newStudent(student:Object):Observable<Object>{
    console.log(student);
    return this.http.post(`${this.baseUrl}/add`,student);  
  }

  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  getStudent(email:string):Observable<Object>{
    return this.http.get(`${this.baseUrl}/getOne/${email}`);  
  }

  schemeUrl="http://localhost:8901/ssp/student"
  saveScheme(email:string,scode:string,student:Object):Observable<any>{
    return this.http.post(`${this.schemeUrl}/apply/${email}?scode=${scode}`,student);
  }

  //Admin Dashboard
  forwardForm(email:string,student:Object):Observable<any>{
    return this.http.put(`${this.baseUrl}/forward/${email}`,student);
  }

  rejectForm(email:string,student:Object):Observable<any>{
    return this.http.put(`${this.baseUrl}/reject/${email}`,student);
  }

  //Scheme
  sUrl="http://localhost:8901/ssp/scheme"
  
  getScheme(): Observable<any> {
    return this.http.get(`${this.sUrl}/all`);
  }

  newScheme(scholarship:Object): Observable<Object>{
    console.log(scholarship);
    return this.http.post(`${this.sUrl}/add`,scholarship);  
  }

  getAmount(scode:string):Observable<any>{
    return this.http.get(`${this.sUrl}/get/${scode}`,{responseType:'text'});
  }

  //Contact Us
  cUrl="http://localhost:8901/ssp/contact"
  newContact(contactus:Object): Observable<Object>{
    console.log(contactus);
    return this.http.post(`${this.cUrl}/add`,contactus);
  }

  getContact():Observable<any>{
    return this.http.get(`${this.cUrl}/all`);
  }


}

