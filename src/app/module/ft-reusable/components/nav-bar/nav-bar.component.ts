import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private authService: AuthServiceService,
    private router: Router
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

  checkRole(role: string): boolean {
    return this.authService.checkRole(role);
  }

  ViewOrders(): void {
    this.router.navigate(['/orders']);
  }

  getMyOrders(): void {
    this.router.navigate(['/orders']);
  }


}
