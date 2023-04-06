import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegisterRequest } from 'src/app/models/interface/user.model';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.initRegisterForm()
  }

  initRegisterForm() {
    this.registerForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
      confirmPassword: new FormControl('', Validators.required)
    })
  }

  signUpActiont() {

    const {name, email, phone, location, password, confirmPassword}: UserRegisterRequest = {
      name: this.registerForm.get('name')?.value,
      email: this.registerForm.get('email')?.value,
      phone: this.registerForm.get('phone')?.value,
      location: this.registerForm.get('location')?.value,
      password: this.registerForm.get('password')?.value,
      confirmPassword: this.registerForm.get('confirmPassword')?.value
    }
;
    this.authService.register(name, email, phone, password, location).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.messageService.add({severity:'success', summary: 'registered', detail: 'successfully registered account'})
      },
      error: err => {
        this.errorMessage = err.error;
        this.isSignUpFailed = true;
      }
    })

  }

  isValidForm():boolean {
    return this.registerForm.get('password')?.value == this.registerForm.get('confirmPassword')?.value;
  }

}
