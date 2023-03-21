import { InputDetailsComponent } from './component/input/details/input-details.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { BodyComponent } from './component/body/body.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CreateFarmComponent } from './component/farms/create-farm/create-farm.component';
import { FarmsComponent } from './component/farms/show/farms.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { CreateComponent } from './component/products/create/create.component';
import { CreateShopComponent } from './component/supplyshops/create-shop/create-shop.component';
import { SupplyShopsComponent } from './component/supplyshops/show/supply-shops.component';
import { InputsComponent } from './component/input/inputs/inputs.component';
import { CreateInputComponent } from './component/input/create-input/create-input.component';
import { ProductsComponent } from './component/products/products/products.component';
import { ProductDetailsComponent } from './component/products/details/product-details.component';
import { ViewOrdersComponent } from './component/order/view-orders/view-orders.component';
import { PlaceOrderComponent } from './component/order/place-order/place-order.component';

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
    CreateFarmComponent,
    CreateShopComponent,
    ProductsComponent,
    FarmsComponent,
    SupplyShopsComponent,
    CreateComponent,
    InputsComponent,
    CreateInputComponent,
    ProductDetailsComponent,
    InputDetailsComponent,
    ViewOrdersComponent,
    PlaceOrderComponent
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
