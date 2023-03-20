import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: any = {};
  productid: string = '';
  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productid = localStorage.getItem('productid') || '';
    console.log(this.productid)
    this.getProduct();

  }

  getProduct() {
    this.productService.getProduct(this.productid).subscribe((data: any) => {
      this.product = data.data;
      this.product.farmName = this.product.farm.name;
      this.product.location = this.product.farm.location;
      this.product.farmerPhone = this.product.farm.farmer.phone;
    })
  }

  addToCart(productId: string) {
    console.log('add to cart')
  }

  placeOrder(productId: string) {
    console.log('place order')
  }


}
