import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FtAuthRoutingModule } from './ft-auth-routing.module';
import { FtAuthComponent } from './ft-auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FtSharedModule } from '../ft-shared/ft-shared.module';
import { FtReusableModule } from '../ft-reusable/ft-reusable.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FtAuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FtAuthRoutingModule,
    FtSharedModule,
    FtReusableModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    FtAuthComponent,
    RegisterComponent
  ]
})
export class FtAuthModule { }
