import { Component, OnInit } from '@angular/core';
import { SupplyShopService } from 'src/app/services/supply-shop.service';

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
  isLoading = false;
  fileName = '';


  onSubmit(): void {
    const formData = new FormData();
    formData.append('image', this.form.files);
    formData.append('name', this.form.name);
    formData.append('location', this.form.location);
    this.isLoading = true;
    this.supplyShop.create(formData).subscribe(
      (res) => {
        this.isSuccessful = true;
        this.isLoading = false;
        this.isCreatedFailed = false;
        this.fileName = res.farm;
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isCreatedFailed = true;
        this.isLoading = false;
      }
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

}
