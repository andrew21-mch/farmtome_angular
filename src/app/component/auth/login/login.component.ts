import { Route, Router, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

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

  constructor(
    private router: Router,
    private authService: AuthServiceService,
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { email, password } = this.form;
    this.authService.login(email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.user.id);
        localStorage.setItem('user', JSON.stringify(data.user));
        this.router.navigateByUrl('/dashboard')
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error;
        this.isSignUpFailed = true;
      }
    });
  }



  }
