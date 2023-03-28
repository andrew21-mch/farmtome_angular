import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CheckboxModule,
    ButtonModule
  ],
  exports: [
    InputTextModule,
    CheckboxModule,
    ButtonModule
  ]
})
export class FtSharedModule { }
