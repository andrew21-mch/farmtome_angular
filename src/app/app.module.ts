import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BodyComponent } from './components/reusables/body/body.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/reusables/nav/nav.component';
import { FooterComponent } from './components/reusables/footer/footer.component';
import { CreateFarmComponent } from './components/create-farm/create-farm.component';
import { CreateShopComponent } from './components/create-shop/create-shop.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FarmsComponent } from './components/farms/farms.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { SupplyShopsComponent } from './components/supply-shops/supply-shops.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BodyComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    DashboardComponent,
    ProductsComponent,
    CreateFarmComponent,
    CreateShopComponent,
    FarmsComponent,
    SupplyShopsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
