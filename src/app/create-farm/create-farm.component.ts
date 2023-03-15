import { FarmService } from './../farm.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-farm',
  templateUrl: './create-farm.component.html',
  styleUrls: ['./create-farm.component.css']
})
export class CreateFarmComponent implements OnInit {

  constructor(private farmService: FarmService) { }

  ngOnInit(): void {
  }


  form: any = {
    name: null,
    image: null,
    location: null,
  };
  isSuccessful = false;
  isCreatedFailed = false;
  errorMessage = '';


  onSubmit(): void {
    const { name, location, image} = this.form;
    this.farmService.create(name,location, image).subscribe({
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
