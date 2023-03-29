import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const shop_route = environment.production ? 'https://farmtome.herokuapp.com/api/v1/supply_shops' : environment.host+'/api/v1/supply_shops/';
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
export class SupplyShopService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  create(formData: FormData): Observable<any> {
    return this.http.post(
      shop_route ,
      {
        name: formData.get('name'),
        location: formData.get('location'),
        image: formData.get('image'),
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
    return this.http.delete(
      environment.production ?
      shop_route + '/' + id :
      shop_route + id,
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
      environment.production ?
      shop_route +  '/user/' + localStorage.getItem('id') :
      shop_route + 'user/' + localStorage.getItem('id'),
      httpOptions
    );
  }


}
