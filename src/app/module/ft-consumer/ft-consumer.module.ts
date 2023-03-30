import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FtConsumerRoutingModule } from './ft-consumer-routing.module';
import { FtConsumerComponent } from './ft-consumer.component';
import { FtReusableModule } from '../ft-reusable/ft-reusable.module';
import { FtSharedModule } from '../ft-shared/ft-shared.module';


@NgModule({
  declarations: [
    FtConsumerComponent
  ],
  imports: [
    CommonModule,
    FtConsumerRoutingModule,
    FtReusableModule,
    FtSharedModule
  ]
})
export class FtConsumerModule { }
