import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const search_route = environment.production ? 'https://farmtome.herokuapp.com/api/v1/general-search/' : 'http://localhost:8000/api/v1/general-search/';
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
}
