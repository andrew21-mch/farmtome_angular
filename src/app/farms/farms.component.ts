import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FarmService } from '../farm.service';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})

export class FarmsComponent implements OnInit {

  constructor(
    private farmService: FarmService,
  ) { }

  farms: any = [];

  ngOnInit(): void {
    this.getUserFarms();
  }


  getUserFarms(){
   const farms = this.farmService.getUserFarms().subscribe(
     (res) => {
      this.farms = res;
      this.farms = this.farms.farms;
      },
  );
  }

  deleteFarm(id: string){
    console.log(id);
  }
}
