import { SupplyShopService } from '../services/supply-shop.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supply-shops',
  templateUrl: './supply-shops.component.html',
  styleUrls: ['./supply-shops.component.css']
})
export class SupplyShopsComponent implements OnInit {
  message: any;
  isLoaded: boolean = false;

  constructor(
    private shopService: SupplyShopService,
  ) { }

  shops: any = [];
  isSuccessful: boolean = false
  ngOnInit(): void {
    this.getUserShops();
  }

  getUserShops() {
    // check if isLoaded is true

    const shops = this.shopService.getUserShops().subscribe(
      (res) => {
        console.log(res);
        this.shops = res;
        this.isLoaded = true;
        this.shops = this.shops.supplyShops;
      },
    );
  }
  deleteshop(id: string) {
    return this.shopService.delete(id).subscribe(
      (res) => {
        this.isSuccessful = true;
        this.message = res.message;
        this.getUserShops();
      }
    );
  }
}
