import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import {Client} from '../../models/client';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

    public client = new Client();

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {
    }

    onSubmit() {
        this.authService.registerClient(this.client).subscribe(response => {
            console.log(response);
            if (response.registered === 'true') {
                this.router.navigate(['']);
            }
        });
        this.router.navigate(['']);
    }

}
