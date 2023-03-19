import { AgroInputService } from './../../services/agro-input.service';
import { SupplyShopService } from './../../services/supply-shop.service';
import { ProductsComponent } from './../products/products.component';
import { ProductService } from './../../services/product.service';

import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {

  closeResult = '';
  products: any = [];
  inputs: any = [];
  message: string = '';
  isSuccessful: boolean = false;
  isLoaded: boolean = false;
  userid: string = '';
  
  constructor(
    private readonly router: Router,
    private readonly authService: AuthServiceService,
    private readonly productService: ProductService,
    private readonly agroInputService: AgroInputService
  ) { }


  ngOnInit(): void {
    this.getProducts();
    this.getInputs();

  }

  getUserName(): any {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user).name.split(' ')[0]
    }
    return ''
  }



  isLoggedIn(): boolean {
    return localStorage.getItem('token') ? true : false
  }


  createFarm() {
    // route to create farm
    return this.router.navigate(['/create_farm']);
  }

  createShop() {
    return this.router.navigate(['/create_shop'])
  }

  checkRole(role: string) {
    return this.authService.checkRole(role);
  }

  getProducts() {
    const products = this.productService.getProducts().subscribe(
      (res) => {
        this.products = res;
        this.isLoaded = true;
        this.products = this.products.data
        this.products.forEach((product: any) => {
          product.farmName = product.farm.name;
          product.farmerPhone = product.farm.farmer.phone;
        }
        )
      },

      (err) => {
        this.message = JSON.stringify(err.error.message);
      }
    );
  }

  getInputs() {
    const inputs = this.agroInputService.getInputs().subscribe(
      (res) => {
        this.inputs = res;
        this.isLoaded = true;
        this.inputs = this.inputs.data;
        this.inputs.forEach((input: any) => {
          input.shopName = input.supplier_shop.name;
          input.supplierPhone = input.supplier_shop.supplier.phone;
        }
        )
      },

      (err) => {
        this.message = JSON.stringify(err.error.message);
      }
    );
  }


}
