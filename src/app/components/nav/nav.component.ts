import { AuthServiceService } from '../../service/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  toggleNavbar = true;
  constructor(
    private authService: AuthServiceService
  ) { }

  ngOnInit(): void {
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  getUser(): any {
    return this.authService.currentUser();
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: data => {
        console.log(data);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.reload();
      }
    });
  }


}
