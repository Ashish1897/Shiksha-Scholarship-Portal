import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MyinfoComponent } from './myinfo/myinfo.component';

import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { HomeComponent } from './home/home.component';
import { SchemeComponent } from './scheme/scheme.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DocComponent } from './doc/doc.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { LogoutComponent } from './logout/logout.component';
import { Scholarship } from './scholarship';
import { AddScholarshipComponent } from './add-scholarship/add-scholarship.component';



const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:StudentLoginComponent},
  {path:'admin',component:AdminLoginComponent},
  {path:'student_dashboard', component:StudentDashboardComponent},
  {path:'student_details/:email',component:StudentDetailsComponent},
  {path:'myinfo/:email',component:MyinfoComponent},
  {path:'admin_dashboard',component:AdminDashboardComponent},
  {path:'doc',component:DocComponent},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'register',component:RegisterStudentComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'scheme',component:SchemeComponent},
  {path:'logout', component:LogoutComponent},
  {path:'addScholarship',component:AddScholarshipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
