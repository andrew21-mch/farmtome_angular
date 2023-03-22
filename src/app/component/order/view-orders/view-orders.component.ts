import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { OrderServiceService } from 'src/app/services/order-service.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  constructor(
    private generalService: GeneralService,
    private authService: AuthServiceService,
    private orderService: OrderServiceService
  ) { }

  orders: any = [];
  my_orders: any = [];
  message: string = '';
  isLoaded: boolean = false;
  isSuccessful: boolean = false

  ngOnInit(): void {
    this.showOrders();
    this.getMyOrders();

  }

  showOrders() {
    return this.generalService.getOrders().subscribe(
      (res) => {
        this.isSuccessful = true;
        this.orders = res;
        this.orders = this.orders.data
      }
    );
  }

  deleteOrder(id: string) {
    return this.orderService.deleteOrder(id).subscribe(
      (res) => {
        this.isSuccessful = true,
        this.isLoaded = true,
        this.getMyOrders
        this.message = res
      },
    );
  }

  paidOrder(id: string) {
    console.log(id)
  }

  approveOrder(id: string) {
    console.log(id)
  }

  rejectOrder(id: string) {
    console.log(id)
  }

  checkRole(role: string): boolean {
    return this.authService.checkRole(role);
  }

  cancelOrder(id: string) {
    this.deleteOrder(id);
  }

  getMyOrders() {
    return this.generalService.getMyOrders().subscribe(
      (res) => {
        this.isSuccessful = true;
        this.my_orders = res;
        this.my_orders = this.my_orders.data
      }
    );
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

}
