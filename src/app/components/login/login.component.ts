import { Component, OnInit } from '@angular/core';
import {Client} from '../../models/client';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    public client = new Client();

    constructor() { }

    ngOnInit() {
    }

    onSubmit() {

    }
}
