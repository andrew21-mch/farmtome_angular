import { Component, OnInit } from "@angular/core";
import { FarmService } from "src/app/services/farm.service";


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

}
