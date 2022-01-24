import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { MyinfoComponent } from './myinfo/myinfo.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DocComponent } from './doc/doc.component';
import { SchemeComponent } from './scheme/scheme.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoutComponent } from './logout/logout.component';
import { AddScholarshipComponent } from './add-scholarship/add-scholarship.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterStudentComponent,
    ContactUsComponent,
    AboutUsComponent,
    StudentDashboardComponent,
    StudentLoginComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    StudentDetailsComponent,
    MyinfoComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    DocComponent,
    SchemeComponent,
    LogoutComponent,
    AddScholarshipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
