import { SupplyShopService } from './../../../services/supply-shop.service';
import { Component, OnInit } from '@angular/core';
import { AgroInputService } from 'src/app/services/agro-input.service';

@Component({
  selector: 'app-create-input',
  templateUrl: './create-input.component.html',
  styleUrls: ['./create-input.component.css']
})
export class CreateInputComponent implements OnInit {

  constructor(
    private readonly inputService: AgroInputService,
    private readonly shopService: SupplyShopService
  ) { }

  ngOnInit(): void {
    this.getUserShops();
  }

  form: any = {
    name: null,
    description: null,
    price: null,
    image: null,
    shop: null,
  };

  shops: any = [];

  fileName = '';
  isSuccessful = false;
  isCreatedFailed = false;
  isLoading = false;
  errorMessage = '';
  successMessage = '';


  onsubmitCreate(): void {
    const formData = new FormData();
    formData.append('image', this.form.files);
    formData.append('name', this.form.name);
    formData.append('description', this.form.description);
    formData.append('price', this.form.price);
    formData.append('supplier_shop_id', this.form.shop);
    this.isLoading = true;
    this.inputService.create(formData).subscribe(
      (res) => {
        this.isSuccessful = true;
        this.isLoading = false;
        this.isCreatedFailed = false;
        this.fileName = res.product;
        this.successMessage = JSON.stringify(res.message);
      },
      (err) => {
        // convert error to string
        this.errorMessage = JSON.stringify(err.error.message);
        this.isCreatedFailed = true;
        this.isLoading = false;
      },
    );
  }



  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.files = reader.result;
      }


    }
  }

  getUserShops() {
    const shops = this.shopService.getUserShops().subscribe(
      (res) => {
        this.shops = res;
        this.shops = this.shops.supplyShops;
      },
    );
  }
}
