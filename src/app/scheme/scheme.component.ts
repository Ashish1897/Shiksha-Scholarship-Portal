import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.css']
})
export class SchemeComponent implements OnInit {

  constructor(private router:Router, public loginService: LoginService) { }

  ngOnInit(): void {
  }
 
  list(){
    this.router.navigate(['login']);
  }
}
