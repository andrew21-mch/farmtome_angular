import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FtSharedModule } from '../ft-shared/ft-shared.module';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    PageNotFoundComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    FtSharedModule
  ]
})
export class FtReusableModule { }
