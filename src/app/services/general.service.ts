import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const search_route = environment.production ? 'https://farmtome.herokuapp.com/api/v1/general-search/' : environment.host+'/api/v1/general-search/';
const orders_route = environment.production ? 'https://farmtome.herokuapp.com/api/v1/orders' : environment.host+'/api/v1/orders';
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
export class GeneralService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  search(query: string) {
    return this.http.get(
      search_route + query
    );
  }

  getOrders() {
    return this.http.get(
      orders_route,
      httpOptions
    );
  }

  getMyOrders() {
    return this.http.get(
      orders_route + '/user/get',
      httpOptions
    );
  }
}

