import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const agro_inputs_route = environment.host;

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
export class AgroInputService {

  constructor(
    private readonly http: HttpClient,

  ) { }

  getInputs() {
    return this.http.get(
      `${agro_inputs_route}/AgroInputs`,
      httpOptions
    );
  }

  getInput(id: string) {
    return this.http.get(
      `${agro_inputs_route}/AgroInputs/${id}`,
      httpOptions
    );
  }

  create(formData: FormData): Observable<any> {
    return this.http.post(
      `${agro_inputs_route}/AgroInputs`,
      {
        name: formData.get('name'),
        description: formData.get('description'),
        price: formData.get('price'),
        image: formData.get('image'),
        supplier_shop_id: formData.get('supplier_shop_id'),
      },
      httpOptions
    );
  }

  edit(formData: FormData): Observable<any> {
    return this.http.post(
      `${agro_inputs_route}/AgroInputs/edit/${formData.get('id')}`,
      {
        id: formData.get('id'),
        name: formData.get('name'),
        description: formData.get('description'),
        price: formData.get('price'),
        image: formData.get('image'),
        farm: formData.get('supplyShop'),
      },
    );
  }

  delete(id: string): Observable<any> {
    return this.http.delete(
      `${agro_inputs_route}/AgroInputs/${id}`,
      httpOptions
    )
  }

  getUserShops() {
    return this.http.get(
      `${agro_inputs_route}/AgroInputs/user/${localStorage.getItem('id')}`,
      httpOptions
    );
  }
}
