import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const auth_route = 'http://localhost:8000/api/v1/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      auth_route + 'login',
      {
        email,
        password,
      },
      httpOptions
    );
  }


  register(name: string, email: string, phone: string, password: string, location: string): Observable<any> {
    return this.http.post(
      auth_route + 'register',
      {
        name,
        email,
        phone,
        location,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(auth_route + 'signout', { }, httpOptions);
  }

}
