import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FtProfessionalComponent } from './ft-professional.component';

const routes: Routes = [{ path: '', component: FtProfessionalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FtProfessionalRoutingModule { }
