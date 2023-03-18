import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    name: null,
    email: null,
    phone: null,
    password: null,
    location: null,
    password_repeat: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { name, email, phone, password, location, password_repeat} = this.form;
    this.authService.register(name, email, phone, password, location).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error;
        this.isSignUpFailed = true;
      }
    });
  }
}
