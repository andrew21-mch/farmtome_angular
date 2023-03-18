
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  closeResult = '';
  constructor(
    private readonly  modalService: NgbModal,
    private readonly router: Router,
    private readonly authService: AuthServiceService
  ) { }


  ngOnInit(): void {
  }

  getUserName(): any {
    const user =  localStorage.getItem('user');
    // return the name field of the user object
    // split the string to get the nam
    if(user){
      return JSON.parse(user).name.split(' ')[0]
    }
    return ''
  }



  isLoggedIn(): boolean {
    return localStorage.getItem('token')? true: false
  }


  createFarm(){
    // route to create farm
    return this.router.navigate(['/create_farm']);
  }

  createShop(){
    return this.router.navigate(['/create_shop'])
  }

  checkRole(role: string){
    return this.authService.checkRole(role);
  }
}
