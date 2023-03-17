import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FarmService } from '../service/farm.service';

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
  errorMessage = '';

  onsubmitCreate(): void {
    this.farmService.create(this.form.name, this.form.location, this.form.image).subscribe(
      data => {
        this.isSuccessful = true;
        this.isCreatedFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isCreatedFailed = true;
      }
    );

  }
}
