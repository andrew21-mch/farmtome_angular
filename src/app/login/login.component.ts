import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    email: null,
    password: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { email, password } = this.form;
    this.authService.login(email, password).subscribe({
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
