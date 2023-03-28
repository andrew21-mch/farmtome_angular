import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FtAuthComponent } from './ft-auth.component';
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { 
    path: '', component: FtAuthComponent,
    children: [
      {component: LoginComponent, path: 'login'},
      {component: RegisterComponent, path: 'register'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FtAuthRoutingModule { }
