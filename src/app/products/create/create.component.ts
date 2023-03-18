import { Component, OnInit } from '@angular/core';
import { FarmService } from 'src/app/farm.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  constructor(
    private readonly farmService: FarmService,
    private readonly productService: ProductService,
  ) { }


  ngOnInit(): void {
    this.getUserFarms();
  }

  form: any = {
    name: null,
    description: null,
    price: null,
    image: null,
    farm: null,
  };

  farms: any = [];

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
    formData.append('farm_id', this.form.farm);
    this.isLoading = true;
    this.productService.create(formData).subscribe(
      (res) => {
          this.isSuccessful = true;
          this.isLoading = false;
          this.isCreatedFailed = false;
          this.fileName = res.product;
          this.successMessage = JSON.stringify(res.message);
      },
      (err) => {
        this.errorMessage = err.error.message;
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

  getUserFarms(){
    const farms = this.farmService.getUserFarms().subscribe(
      (res) => {
        this.farms = res;
        this.farms = this.farms.farms;
      },
    );
  }
}
