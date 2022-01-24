import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Student } from '../student';
import { ContactUs } from '../contact-us';
import { Scholarship } from '../scholarship';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  submitted=false;
  hide=false;
  hide2=false;

  student: Observable<Student[]> | any;
  contactus: Observable<ContactUs[]> | any;
  scholarship: Observable<Scholarship[]> | any;
  email:any=sessionStorage.getItem('email');

  constructor(private sService:StudentService,private router:Router) { }

  ngOnInit(): void {
    this.contactus = this.sService.getContact();
    this.scholarship=this.sService.getScheme();
    this.student=this.sService.getStudentList();
  }


  list(){
    this.hide2=!this.hide2;
  }

  show(){
    this.hide=!this.hide;
  }

  showQueries(){
    this.submitted=!this.submitted;
  }
  add(){
    this.router.navigate(['addScholarship']);
  }

  studentDetails(email: string){
    this.router.navigate(['student_details', email]);
  }

}
