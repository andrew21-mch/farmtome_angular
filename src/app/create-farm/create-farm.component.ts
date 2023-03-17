import { FarmService } from './../farm.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-create-farm',
  templateUrl: './create-farm.component.html',
  styleUrls: ['./create-farm.component.css']
})
export class CreateFarmComponent implements OnInit {

  constructor(
    private farmService: FarmService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  form: any = {
    name: null,
    location: null,
    image: null,
  };

  fileName = '';
  isSuccessful = false;
  isCreatedFailed = false;
  isLoading = false;
  errorMessage = '';


  onsubmitCreate(): void {
    const formData = new FormData();
    formData.append('image', this.form.files);
    formData.append('name', this.form.name);
    formData.append('location', this.form.location);
    this.isLoading = true;
    this.farmService.create(formData).subscribe(
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
