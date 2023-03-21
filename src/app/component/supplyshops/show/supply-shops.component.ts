import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { SupplyShopService } from 'src/app/services/supply-shop.service';

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
    private router: Router,
    private authService: AuthServiceService,
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

  showOrders(){
    this.router.navigate(['/orders']);
  }

  checkRole(role: string): boolean{
    return this.authService.checkRole(role);
  }
}
