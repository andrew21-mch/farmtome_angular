import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FtConsumerRoutingModule } from './ft-consumer-routing.module';
import { FtConsumerComponent } from './ft-consumer.component';
import { FtSharedModule } from '../ft-shared/ft-shared.module';
import { FtReusableModule } from '../ft-reusable/ft-reusable.module';


@NgModule({
  declarations: [
    FtConsumerComponent
  ],
  imports: [
    CommonModule,
    FtConsumerRoutingModule,
    FtSharedModule,
    FtReusableModule
  ]
})
export class FtConsumerModule { }
