import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email = '';
  password = '';
  invalidLogin = false;
  errorMessage = 'Invalid Credentials';
  successMessage: string = '';
  loginSuccess = false;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  checkLogin() {

    if (this.loginService.adminLogin(this.email, this.password)) {
      this.router.navigate(['/admin_dashboard'])
      this.invalidLogin = false
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
    }
    else {
      this.invalidLogin = true

    }
    this.loginSuccess = false;

  }

}
