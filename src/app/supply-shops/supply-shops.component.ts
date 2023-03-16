import { SupplyShopService } from './../supply-shop.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supply-shops',
  templateUrl: './supply-shops.component.html',
  styleUrls: ['./supply-shops.component.css']
})
export class SupplyShopsComponent implements OnInit {

  constructor(
    private shopService: SupplyShopService,
  ) { }

  shops: any = [];

  ngOnInit(): void {
    this.getUserShops();
  }

  getUserShops() {
    const shops = this.shopService.getUserShops().subscribe(
      (res) => {
        console.log(res);
        this.shops = res;
        this.shops = this.shops.supplyShops;
      },
    );
  }
  deleteshop(id: string) {
    console.log(id);
  }

}
