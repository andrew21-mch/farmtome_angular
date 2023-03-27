import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FtProfessionalRoutingModule } from './ft-professional-routing.module';
import { FtProfessionalComponent } from './ft-professional.component';
import { FtReusableModule } from '../ft-reusable/ft-reusable.module';
import { FtSharedModule } from '../ft-shared/ft-shared.module';


@NgModule({
  declarations: [
    FtProfessionalComponent
  ],
  imports: [
    CommonModule,
    FtProfessionalRoutingModule,
    FtReusableModule,
    FtSharedModule
  ]
})
export class FtProfessionalModule { }
