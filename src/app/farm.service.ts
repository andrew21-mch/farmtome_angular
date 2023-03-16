import { CloudinaryModule } from '@cloudinary/ng';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const farm_route = environment.production ? 'https://farmtome.herokuapp.com/api/v1/farms/' : 'http://localhost:8000/api/v1/farms/';

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


export class FarmService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  create(name: string, location: string, image: string): Observable<any> {
    console.log(name, location, image);
    return this.http.post(
      farm_route,
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
      farm_route + 'edit/' + id,
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
      farm_route + 'delete/' + id,
      {
        id,
      },
      httpOptions
    );
  }

  getFarm(id: string): Observable<any> {
    return this.http.get(
      farm_route + 'get/' + id,
      httpOptions
    );
  }

}
