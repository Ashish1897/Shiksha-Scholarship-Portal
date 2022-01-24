import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../student';
import { Scheme } from '../scheme';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  student: Observable<Student[]>| any;
  submitted=false;
  show=false;

  scheme:Observable<Scheme[]>|any;

  email:any=sessionStorage.getItem('email');

  constructor(private router:Router,private sService:StudentService) { }

  ngOnInit(): void {
    this.scheme=this.sService.getScheme();
  }

  schemeApplied(email:string,scode:string){
    this.sService.saveScheme(email,scode,this.student).subscribe(data => {
      console.log(data)
      this.student= data;
    }, error => console.log(error));
    this.submitted=true;
  }
 

  studentDetails(email: string){
    this.router.navigate(['myinfo', email]);
  }

  shows(){
    this.show=!this.show;
  }
}
