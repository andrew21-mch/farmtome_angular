import { Component, OnInit } from '@angular/core';
import { SupplyShopService } from '../service/supply-shop.service';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.css']
})
export class CreateShopComponent implements OnInit {

  constructor(private supplyShop: SupplyShopService) { }

  ngOnInit(): void {
  }


  form: any = {
    name: null,
    location: null,
  };
  isSuccessful = false;
  isCreatedFailed = false;
  errorMessage = '';


  onSubmit(): void {
    const { name, location, image} = this.form;
    this.supplyShop.create(name,location, image).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isCreatedFailed = false;
      },
      error: err => {
        this.errorMessage = err.error;
        this.isCreatedFailed = true;
      }
    });
  }

}
