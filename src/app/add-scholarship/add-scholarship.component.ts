import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Scholarship } from '../scholarship';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-scholarship',
  templateUrl: './add-scholarship.component.html',
  styleUrls: ['./add-scholarship.component.css']
})
export class AddScholarshipComponent implements OnInit {

  scholarship: Scholarship = new Scholarship();
  submitted=false;

  constructor(private router:Router,private sService:StudentService) { }

  ngOnInit(): void {
  }

  save() {
    this.sService.newScheme(this.scholarship).subscribe(data => console.log(data), error => console.log(error));
    console.log(this.scholarship);
    this.scholarship= new Scholarship();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {

    this.router.navigate(['admin_dashboard']);
  }

}
