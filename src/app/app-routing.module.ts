import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { JobseekerDashboardComponent } from './jobseeker-dashboard/jobseeker-dashboard.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { JobpostaddComponent } from './jobpostadd/jobpostadd.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'admindashboard',
    component:AdminDashboardComponent
  },
  {
    path:'jobseekerdashboard',
    component:JobseekerDashboardComponent
  },
  {
    path:'employerdashboard',
    component:EmployerDashboardComponent
  },
  {
    path:'jobpostadd',
    component:JobpostaddComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
