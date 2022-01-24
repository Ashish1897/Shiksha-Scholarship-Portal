import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  email = '';
  password = '';
  invalidLogin = false;
  errorMessage = 'Invalid Credentials';
  successMessage: string='';
  loginSuccess = false;

  constructor(private router:Router, private loginService:LoginService) { }

  ngOnInit(): void {
  }

  checkLogin() {
    let student={
      "email":this.email,
      "password":this.password
    }
    this.loginService.login(student).subscribe((response) => {
      console.log(response);
      if(response)
      {
        sessionStorage.setItem('email', this.email)
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful.';
        this.router.navigate(['/student_dashboard'])
      }
      else{
        this.invalidLogin = true;
      }
    });
    this.loginSuccess = false;
  }

  list(){
    this.router.navigate(['register']);
  }
}
