import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  email:string='';
  student:Student |any;

  submitted=false;
  bio:string='';
  gen=false;


  constructor(private sService:StudentService,private router:Router
    ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.student = new Student();
    /* Snapshot is used to get the Route Parameters */
    this.email = this.route.snapshot.params['email'];  

    /**
     * As a publisher, you create an Observable instance that defines a subscriber function. 
     * This is the function that is executed when a consumer calls the subscribe() method. 
     * The subscriber function defines how to obtain or generate values or messages to be published.
     */
    this.sService.getStudent(this.email)
      .subscribe(data => {
        console.log(data)
        this.student= data;
        this.check();
      }, error => console.log(error));
  }


  forward(email:string){
    console.log(email)
    this.student = new Student();
    this.sService.forwardForm(email,this.student).subscribe(data => {
      console.log(data)
      this.student= data;
    }, error => console.log(error));
    this.submitted =true;


    this.student = new Student();
    /* Snapshot is used to get the Route Parameters */
    this.email = this.route.snapshot.params['email'];  
    this.sService.getStudent(this.email)
      .subscribe(data => {
        console.log(data)
        this.student= data;
        this.check();
      }, error => console.log(error));
  }


  reject(email:string){
    console.log(email)
    this.student = new Student();
    this.sService.rejectForm(email,this.student).subscribe(data => {
      console.log(data)
      this.student= data;
    }, error => console.log(error));
    this.submitted =true;

    this.student = new Student();
    /* Snapshot is used to get the Route Parameters */
    this.email = this.route.snapshot.params['email'];  
    this.sService.getStudent(this.email)
      .subscribe(data => {
        console.log(data)
        this.student= data;
        this.check();
      }, error => console.log(error));
  }

  check(){
    this.bio=this.student.gender;
       console.log(this.bio);
     if( this.bio == "Female"){
       this.gen=true;
     } 
   }

  list(){
    this.router.navigate(['admin_dashboard']);
  }
}
