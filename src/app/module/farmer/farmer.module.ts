import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerComponent } from './farmer.component';
import { FtSharedModule } from '../ft-shared/ft-shared.module';


@NgModule({
  declarations: [
    FarmerComponent
  ],
  imports: [
    CommonModule,
    FarmerRoutingModule,
    FtSharedModule
  ]
})
export class FarmerModule { }
