import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FtFarmerComponent } from './ft-farmer.component';

const routes: Routes = [{ path: '', component: FtFarmerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FtFarmerRoutingModule { }
