
import { CreateInputComponent } from './component/input/create-input/create-input.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { BodyComponent } from './component/body/body.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CreateFarmComponent } from './component/farms/create-farm/create-farm.component';
import { FarmsComponent } from './component/farms/show/farms.component';
import { InputsComponent } from './component/input/inputs/inputs.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { CreateComponent } from './component/products/create/create.component';
import { CreateShopComponent } from './component/supplyshops/create-shop/create-shop.component';
import { SupplyShopsComponent } from './component/supplyshops/show/supply-shops.component';
import { ProductsComponent } from './component/products/products/products.component';
import { ProductDetailsComponent } from './component/products/details/product-details.component';
import { InputDetailsComponent } from './component/input/details/input-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BodyComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create_farm', component: CreateFarmComponent },
  { path: 'create_shop', component: CreateShopComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'farms', component: FarmsComponent },
  { path: 'supply_shops', component: SupplyShopsComponent },
  { path: 'products/create', component: CreateComponent },
  { path: 'products/details', component: ProductDetailsComponent},
  { path: 'inputs', component: InputsComponent },
  { path: 'inputs/details', component: InputDetailsComponent},
  { path: 'inputs/create', component: CreateInputComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
