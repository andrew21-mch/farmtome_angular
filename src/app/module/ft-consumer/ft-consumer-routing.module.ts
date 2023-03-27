import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FtConsumerComponent } from './ft-consumer.component';

const routes: Routes = [{ path: '', component: FtConsumerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FtConsumerRoutingModule { }
