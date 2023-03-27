import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FtFarmerRoutingModule } from './ft-farmer-routing.module';
import { FtFarmerComponent } from './ft-farmer.component';
import { FtReusableModule } from '../ft-reusable/ft-reusable.module';
import { FtSharedModule } from '../ft-shared/ft-shared.module';


@NgModule({
  declarations: [
    FtFarmerComponent
  ],
  imports: [
    CommonModule,
    FtFarmerRoutingModule,
    FtReusableModule,
    FtSharedModule
  ]
})
export class FtFarmerModule { }
