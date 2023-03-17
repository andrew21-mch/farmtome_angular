import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateShopComponent } from './create-shop/create-shop.component';
import { CreateFarmComponent } from './create-farm/create-farm.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FarmsComponent } from './farms/farms.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { BodyComponent } from './components/body/body.component';

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
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
