import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { StudentService } from '../student.service';
import { Student } from '../student';
import { Scholarship } from '../scholarship';


@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css']
})
export class MyinfoComponent implements OnInit {

  email:string='';
  student:Student |any;
  scholarship:Scholarship = new Scholarship();

  submitted=false;
  forward=false;
  reject=false;
  pending=false;
  gen=false;

  amount:any;
  stat:string='';
  bio:string='';

  
  constructor(private sService:StudentService,private router:Router
    ,private route:ActivatedRoute) {
      
     }

  ngOnInit(): void {
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

  show(){
    this.scholarship = new Scholarship();

     this.sService.getAmount(this.student.scode).subscribe((data) => {
       this.amount=data;
       console.log(this.amount);
     },error => console.log(error));

      
      this.stat= this.student.status;
      if(this.stat == "Forwarded"){
        this.forward=true;
      }else if(this.stat == "Rejected"){
        this.reject=true;
      }else{
        this.pending=true;
      } 
      
  }

  list(){
    this.router.navigate(['student_dashboard']);
  }

}
