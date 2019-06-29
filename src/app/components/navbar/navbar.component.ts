import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username:string;
  password:string;
  logged:boolean;
  user_type:string;
  closeResult: string;

  constructor(private route: ActivatedRoute, private router: Router, private modalService: NgbModal, private authService: AuthService) { }

  ngOnInit() {
    if(window.localStorage.getItem("logged") === "true")
      this.logged = true;
    else if (window.localStorage.getItem("logged") === "false")
      this.logged = false;
    
    this.user_type = window.localStorage.getItem("user_type")
  }

  onSubmit(){
    this.authService.login(this.username, this.password).subscribe(response => {
      window.localStorage.setItem("logged", ""+response.logged);
      window.localStorage.setItem("user_type", response.user_type);
      window.localStorage.setItem("user", response.user)

      window.location.href = "http://localhost:4200"
    });
  }

  logout(){
    this.authService.logout().subscribe(response => {
      window.localStorage.setItem("logged", ""+response.logged);
      window.localStorage.setItem("user_type", response.user_type);
      
      window.location.href = "http://localhost:4200"
    });
  }

  /*
  * Modal Functions
  */
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
