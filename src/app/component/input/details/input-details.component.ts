import { AgroInputService } from './../../../services/agro-input.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-details',
  templateUrl: './input-details.component.html',
  styleUrls: ['./input-details.component.css']
})
export class InputDetailsComponent implements OnInit {

  input: any = {};
  inputId: string = '';
  constructor(
    private inputService: AgroInputService,
  ) { }

  ngOnInit(): void {
    this.inputId = localStorage.getItem('inputId') || '';
    console.log(this.inputId)
    this.getInput();

  }

  getInput() {
    this.inputService.getInput(this.inputId).subscribe((data: any) => {
      this.input = data.data;
      this.input.shopName = this.input.supplier_shop.name;
      this.input.location = this.input.supplier_shop.location;
      this.input.supplierPhone = this.input.supplier_shop.supplier.phone;
    })
  }

  addToCart(input: string) {
    console.log('add to cart')
  }

  placeOrder(input: string) {
    console.log('place order')
  }
}
