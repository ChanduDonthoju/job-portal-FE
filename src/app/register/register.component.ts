import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service'; // Import your service
import { User } from '../User'; // Assuming you have a User model

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  users: User;

  registerForm: FormGroup;
  formSubmitted = false;
  isSubmitting = false;

  constructor(private router: Router, private service: LoginServiceService) {
    this.registerForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmPassword: new FormControl('', Validators.required),
        role: new FormControl('', Validators.required),
      },
      this.passwordMatchValidator
    ); // Apply custom validation for password match
  }

  // Custom Validator for Password Match
  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit(): void {
    //console.log(this.users);
    if (this.registerForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      // Create a user object using the form data
      const user: User = {
        id: 0,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        role: this.registerForm.value.role,
      };

      this.service.addUser(user).subscribe(
        (response) => {
          this.users = response;
          this.formSubmitted = true; // Form submission success
          this.isSubmitting = false; // Enable button again
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        },
        (error) => {
          console.error('Error adding user:', error);
          alert(
            'Error occurred while registering the user. Please try again later.'
          );
          this.isSubmitting = false; // Enable button again after error
        }
      );
    }
  }

  goToLogin(): void {
    this.router.navigate(['/login']); // Navigate to the login page
  }
}
