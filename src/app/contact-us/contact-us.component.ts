import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactUs } from '../contact-us';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactus:ContactUs = new ContactUs();
  submitted=false;
  constructor(private router:Router, private sService:StudentService ) { }

  ngOnInit(): void {
  }

  save() {
    this.sService.newContact(this.contactus).subscribe(data => console.log(data), error => console.log(error));
    console.log(this.contactus);
    this.contactus= new ContactUs();
  }

  onSubmit(){
    this.save(); 
    this.submitted=true; 
  }

}
