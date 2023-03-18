import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const product_route = environment.production ? 'https://farmtome.herokuapp.com/api/v1/products' : 'http://localhost:8000/api/v1/products';
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
export class ProductService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getProducts() {
    return this.http.get(
      product_route,
      httpOptions
    );
  }

  getProduct(id: string) {
    return this.http.get(
      environment.production ?
      product_route + '/' + id :
      product_route + id,
    );
  }

  create(formData: FormData): Observable<any> {
    return this.http.post(
      product_route,
      {
        name: formData.get('name'),
        description: formData.get('description'),
        price: formData.get('price'),
        image: formData.get('image'),
        farm_id: formData.get('farm_id'),
      },
      httpOptions
    );
  }

  edit(formData: FormData): Observable<any> {
    return this.http.post(
      product_route + 'edit/' + formData.get('id'),
      {
        id: formData.get('id'),
        name: formData.get('name'),
        description: formData.get('description'),
        price: formData.get('price'),
        image: formData.get('image'),
        farm: formData.get('farm'),
      },
    );
  }

  delete(id: string): Observable<any> {
    return this.http.delete(
      product_route + '/' + id,
      httpOptions
    )
  }
}
