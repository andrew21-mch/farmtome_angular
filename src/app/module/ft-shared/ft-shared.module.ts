import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ToastModule} from 'primeng/toast'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CheckboxModule,
    ButtonModule,
    RadioButtonModule,
    ToastModule
  ],
  exports: [
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    RadioButtonModule,
    ToastModule
  ]
})
export class FtSharedModule { }
