import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FarmService } from "src/app/services/farm.service";
import { GeneralService } from "src/app/services/general.service";


@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})

export class FarmsComponent implements OnInit {

  constructor(
    private farmService: FarmService,
    private router: Router,
  ) { }

  farms: any = [];
  orders: any = [];
  message: string = '';
  isSuccessful: boolean = false
  isLoaded: boolean = false;

  ngOnInit(): void {
    this.getUserFarms();
  }


  getUserFarms(){
   const farms = this.farmService.getUserFarms().subscribe(
     (res) => {
      this.farms = res;
      this.isLoaded = true;
      this.farms = this.farms.farms;
      },
  );
  }

  deleteFarm(id: string){
    return this.farmService.delete(id).subscribe(
      (res) => {
        this.isSuccessful = true;
        this.message = res.message;
        this.getUserFarms();
      }
    );
  }

  showOrders(){
    this.router.navigate(['/orders']);
  }

}
