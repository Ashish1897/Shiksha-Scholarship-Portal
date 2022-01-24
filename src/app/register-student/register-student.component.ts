import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {


  
  student:Student= new Student();
  submitted=false;
  
  constructor(private sService:StudentService,private router:Router) { }

  ngOnInit(): void {
  }

  save() {
    this.sService.newStudent(this.student).subscribe(data => console.log(data), error => console.log(error));
    console.log(this.student);
    this.student= new Student();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  goto(){
    this.router.navigate(['login']);
  }
 
}
