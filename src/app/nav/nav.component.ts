import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  alog=false;
  slog=false;
  email:any=sessionStorage.getItem('email');
  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

}
