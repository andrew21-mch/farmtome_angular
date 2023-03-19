import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const agro_inputs_route = environment.production ? 'https://farmtome.herokuapp.com/api/v1/AgroInputs' : 'http://localhost:8000/api/v1/AgroInputs';
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
      agro_inputs_route,
      httpOptions
    );
  }

  getInput(id: string) {
    return this.http.get(
      environment.production ?
      agro_inputs_route + '/' + id :
      agro_inputs_route + id,
    );
  }

  create(formData: FormData): Observable<any> {
    return this.http.post(
      agro_inputs_route,
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
      agro_inputs_route + 'edit/' + formData.get('id'),
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
      agro_inputs_route + '/' + id,
      httpOptions
    )
  }
}
