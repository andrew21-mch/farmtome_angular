import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginRequest } from 'src/app/models/interface/user.model';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isSuccessful: boolean = false;
  isSignUpFailed: boolean = false;
  errorMessage: string = ``;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthServiceService,
  ) {

  }

  ngOnInit(): void {
    this.initFormLogin();
  }

  initFormLogin() {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  loginAction() {
    const userLogin: UserLoginRequest = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }
    this.authService.login(userLogin.email, userLogin.password).subscribe({
      next: data => {
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
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  isValidForm() {
    return this.loginForm.get('password')?.invalid
  }
}
