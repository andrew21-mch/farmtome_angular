import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  constructor(
    private generalService: GeneralService,
    private authService: AuthServiceService,
  ) { }

  orders: any = [];
  my_orders: any = [];
  message: string = '';
  isSuccessful: boolean = false

  ngOnInit(): void {
    this.showOrders();
    this.getMyOrders();

  }

  showOrders(){
    return this.generalService.getOrders().subscribe(
      (res) => {
        this.isSuccessful = true;
        this.orders = res;
        this.orders = this.orders.data
        console.log(this.orders)
      }
    );
  }

  deleteOrder(id: string){
    console.log(id)
  }

  paidOrder(id: string){
    console.log(id)
  }

  approveOrder(id: string){
    console.log(id)
  }

  rejectOrder(id: string){
    console.log(id)
  }

  checkRole(role: string): boolean{
    return this.authService.checkRole(role);
  }

  cancelOrder(id: string){
    console.log(id)
  }

  getMyOrders(){
    return this.generalService.getMyOrders().subscribe(
      (res) => {
        this.isSuccessful = true;
        this.my_orders = res;
        this.my_orders = this.my_orders.data
        console.log(this.my_orders)
      }
    );
  }

  isAuthenticated(): boolean{
    return this.authService.isAuthenticated();
  }

}
