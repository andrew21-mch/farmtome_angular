
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const auth_route = environment.production ? 'https://farmtome.herokuapp.com/api/v1/auth/' : 'http://localhost:8000/api/v1/auth/';
const logout_route = environment.production ? 'https://farmtome.herokuapp.com/api/v1/users/' : 'http://localhost:8000/api/v1/users/';
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
    return this.http.post(logout_route + 'logout',
      {
        token: localStorage.getItem('token')
      },
      // add token to header
      httpOptions
    );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }

  currentUser(): any {
    return this.isAuthenticated() ? localStorage.getItem('token') : null;
  }

  checkRole(role: string): any {
    const user =  localStorage.getItem('user');
    var roles = []
    if(user){
      var userRoles = JSON.parse(user).roles
      for(var i = 0; i < userRoles.length; i++){
        roles.push(userRoles[i].name)
      }
    }
    return roles.includes(role)
  }
}
