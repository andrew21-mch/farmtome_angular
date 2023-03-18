import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private readonly authService: AuthServiceService
  ) { }

  products: any = [];
  message: string = '';
  isSuccessful: boolean = false;
  isLoaded: boolean = false;
  userid: string = '';
  ngOnInit(): void {
    this.getProducts();
    this.userid = this.getLoggedInUser();
    console.log(this.userid)
  }

  getProducts() {
    const products = this.productService.getProducts().subscribe(
      (res) => {
        this.products = res;
        this.isLoaded = true;
        this.products = this.products.data
      },

      (err) => {
        this.message = err.error.message;
      }
    );
  }

  getProduct(id: string) {
    return this.productService.getProduct(id).subscribe(
      (res) => {
        this.isSuccessful = true;
        this.getProducts();
      }
    );
  }

  deleteFaild: boolean = false;
  deleteProduct(id: string) {
    return this.productService.delete(id).subscribe(
      (res) => {
        this.isSuccessful = true;
        this.message = JSON.stringify(res.data);
        this.getProducts();
      },
      (err) => {
        this.deleteFaild = true;
        this.message = err.error.message;
      }

    );
  }

  checkRole(role: string) {
    return this.authService.checkRole(role);
  }

  // get loggedIn user as array
    // get logged in user as an array
    getLoggedInUser(): string {
      const user = localStorage.getItem('user');
      const id = JSON.parse(user!).id;
      return id;
    }


}
