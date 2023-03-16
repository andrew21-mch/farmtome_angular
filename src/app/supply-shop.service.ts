import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const shop_route = environment.production ? 'https://farmtome.herokuapp.com/api/v1/supply_shops/' : 'http://localhost:8000/api/v1/supply_shops/';
const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class SupplyShopService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  create(name: string, location: string, image: string): Observable<any> {
    return this.http.post(
      shop_route ,
      {
        name,
        location,
        image,
      },
      httpOptions
    );
  }

  edit(id: string, name: string, location: string, image: string): Observable<any> {
    return this.http.post(
      shop_route + 'edit/' + id,
      {
        id,
        name,
        location,
        image,
      },
      httpOptions
    );
  }

  delete(id: string): Observable<any> {
    return this.http.post(
      shop_route + 'delete/' + id,
      {
        id,
      },
      httpOptions
    );
  }

  getShop(id: string): Observable<any> {
    return this.http.get(
      shop_route + 'get/' + id,
      httpOptions
    );
  }

  getUserShops() {
    return this.http.get(
      shop_route + 'user/' + localStorage.getItem('id'),
      httpOptions
    );
  }


}
