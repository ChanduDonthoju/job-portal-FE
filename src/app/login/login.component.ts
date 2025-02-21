import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../User';
 
@Component({
  selector: 'app-signin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  user: User[] = [];
  errMsg: string = "";
  loginForm: FormGroup;
  userlogin: User = {
    id: 0,
    email: "",
    password: "",
    role: ""
  };
 
  passwordVisible: boolean = false;
 
  constructor(private r: Router, private s: LoginServiceService) {
    // Fetch all users on component initialization
    this.s.getAllUsers().subscribe((u) => this.user = u);
 
    // Form group with validation
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
      }
    );
  }
 
  // On form submission
  onSubmit(): void {
    const user1: User[] = this.user.filter((u) => u.email == this.userlogin.email);
 
    if (user1.length !== 0) {
      // Check if the user exists and the password matches
      if (user1[0].email == this.userlogin.email && user1[0].password == this.userlogin.password) {
        // Navigate based on user role
        const role = user1[0].role;
        if (role === 'admin') {
          this.r.navigate(['/admindashboard']);  // Admin Dashboard
        } else if (role === 'jobseeker') {
          this.r.navigate(['/jobseekerdashboard']);  // Jobseeker Dashboard
        } else if (role === 'employer') {
          this.r.navigate(['/employeedashboard']);  // Employer Dashboard
        } else {
          this.r.navigate(['/login']);
          this.errMsg = "Invalid role assigned.";
        }
      } else {
        this.r.navigate(['/login']);
        this.errMsg = "Incorrect Email or Password.";
      }
    } else {
      this.r.navigate(['/login']);
      this.errMsg = "User is not registered.";
    }
  }
 
  get email() {
    return this.loginForm.get('email');
  }
 
  get password() {
    return this.loginForm.get('password');
  }
 
  // Navigate to the Register page
  Register(): void {
    this.r.navigate(['/register']);
  }
 
  // Toggle password visibility
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
 
}