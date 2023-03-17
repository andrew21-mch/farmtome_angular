import { BodyComponent } from './components/reusables/body/body.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateFarmComponent } from './components/create-farm/create-farm.component';
import { CreateShopComponent } from './components/create-shop/create-shop.component';
import { ProductsComponent } from './components/products/products.component';
import { FarmsComponent } from './components/farms/farms.component';
import { SupplyShopsComponent } from './components/supply-shops/supply-shops.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './auth/register/register.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BodyComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create_farm', component: CreateFarmComponent},
  { path: 'create_shop', component: CreateShopComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'farms', component: FarmsComponent},
  { path: 'supply_shops', component: SupplyShopsComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
