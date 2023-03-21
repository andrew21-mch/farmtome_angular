import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const order_route = environment.production ? 'https://agroconnect.herokuapp.com/api/v1/orders' : 'http://localhost:8000/api/v1/orders/';
const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || '',
      'charset': 'utf-8'
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(
    private readonly http: HttpClient
  ) { }

  placeOrder(formData: FormData): Observable<any>{
    return this.http.post(order_route, {
      delivery_method: formData.get('delivery_method'),
      delivery_address: formData.get('delivery_address'),
      payment_method: formData.get('payment_method'),
      product_id: formData.get('product_id'),
      agro_input_id: formData.get('agro_input_id'),
      farm_id: formData.get('farm_id'),
      supplier_shop_id: formData.get('supplier_shop_id'),
    },
      httpOptions);

  }
}