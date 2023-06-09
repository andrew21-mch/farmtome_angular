import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgroInputService } from 'src/app/services/agro-input.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  message: string = '';
  isSuccessful: boolean = false;
  isLoaded: boolean = false;
  userid: string = '';
  inputs: any = [];

  constructor(
    private readonly inputService: AgroInputService,
    private readonly authService: AuthServiceService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.getInputs();
    this.userid = this.getLoggedInUser();

  }
  getInputs() {
    const inputs = this.inputService.getInputs().subscribe(
      (res) => {
        this.inputs = res;
        this.isLoaded = true;
        this.inputs = this.inputs.data
        this.inputs.forEach((input: any) => {
          input.shopName = input.supplier_shop.name;
          input.supplierPhone = input.supplier_shop.supplier.phone;
        }


        )
      },

      (err) => {
        this.message = err.error.message;
      }
    );
  }

  getInput(id: string) {
    return this.inputService.getInput(id).subscribe(
      (res) => {
        this.isSuccessful = true;
        this.getInputs();
      }
    );
  }

  deleteFaild: boolean = false;
  deleteinput(id: string) {
    return this.inputService.delete(id).subscribe(
      (res) => {
        this.isSuccessful = true;
        this.message = JSON.stringify(res.data);
        this.getInputs();
      },
      (err) => {
        this.deleteFaild = true;
        this.message = err.error.message;
      }

    );
  }

  checkRole(role: string) {
    return this.authService.checkRole(role);
  }

  // get loggedIn user as array
  // get logged in user as an array
  getLoggedInUser(): string {
    const user = localStorage.getItem('user');
    if(user === null) {
      return '';
    }else{
      return JSON.parse(user!).id;
    }

  }

  showInputDetails(id: string) {
    localStorage.setItem('inputId', id);
    this.router.navigate(['inputs/details']);
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
