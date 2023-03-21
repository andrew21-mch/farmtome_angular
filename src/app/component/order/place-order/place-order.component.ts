import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/services/order-service.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  form: any = {
    delivery_method: null,
    delivery_address: null,
    payment_method: null
  };

  formData: FormData = new FormData();
  shops: any = [];
  isSuccessful = false;
  isCreatedFailed = false;
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private readonly orderService: OrderServiceService,
  ) { }

  ngOnInit(): void {
  }

  placeOrder(){
    this.formData.append('delivery_method', this.form.delivery_method);
    this.formData.append('delivery_address', this.form.delivery_address);
    this.formData.append('payment_method', this.form.payment_method);
    this.formData.append('product_id', localStorage.getItem('productId') || '');
    this.formData.append('agro_input_id', localStorage.getItem('agroInputId') || '')
    this.formData.append('supplier_shop_id', localStorage.getItem('supplier_shop_id') || '')
    this.formData.append('farm_id', localStorage.getItem('farmId') || '')
    return this.orderService.placeOrder(this.formData).subscribe(
      (res: any) => {
        this.isSuccessful = true;
        this.isCreatedFailed = false;
        this.successMessage = res.message;
        this.isLoading = false;
        localStorage.removeItem('productId');
        localStorage.removeItem('agroInputId');
        localStorage.removeItem('supplier_shop_id');
        localStorage.removeItem('farmId');
      },
      (err: any) => {
        this.errorMessage = err.error.message;
        this.isCreatedFailed = true;
        this.isLoading = false;
        localStorage.removeItem('productId');
        localStorage.removeItem('agroInputId');
        localStorage.removeItem('supplier_shop_id');
        localStorage.removeItem('farmId');
      }
    )

  }

}
