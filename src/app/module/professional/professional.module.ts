import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalRoutingModule } from './professional-routing.module';
import { ProfessionalComponent } from './professional.component';
import { FtSharedModule } from '../ft-shared/ft-shared.module';


@NgModule({
  declarations: [
    ProfessionalComponent
  ],
  imports: [
    CommonModule,
    ProfessionalRoutingModule,
    FtSharedModule
  ]
})
export class ProfessionalModule { }
