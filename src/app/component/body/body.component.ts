import { Component, Inject, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  closeResult = '';
  constructor(
    private readonly  modalService: NgbModal,
  ) { }


  ngOnInit(): void {
  }

  getUserName(): any {
    const user =  localStorage.getItem('user');
    // return the name field of the user object
    return user ? JSON.parse(user).name : '';
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token')? true: false
  }


  open(content: any): void {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

}
