import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const shop_route = `${environment.host}/supply_shops`;
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
      `${shop_route}/edit/id`,
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
      `${shop_route}/${id}`,
      httpOptions
    );
  }

  getShop(id: string): Observable<any> {
    return this.http.get(
      `${shop_route}/get/id`,
      httpOptions
    );
  }

  getUserShops() {
    return this.http.get(
      `${shop_route}/user/${localStorage.getItem('id')}`,
      httpOptions
    );
  }


}
