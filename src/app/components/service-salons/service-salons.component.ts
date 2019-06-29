/*
* List of salons that offer a service
*
**/

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BeautyServiceService} from '../../services/beauty-service.service';
import {SalonPerService} from '../../models/salonPerService';

@Component({
    selector: 'app-service-salons',
    templateUrl: './service-salons.component.html',
    styleUrls: ['./service-salons.component.css']
})

export class ServiceSalonsComponent implements OnInit {

    public allSalons = new SalonPerService();

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: BeautyServiceService) { }

    ngOnInit() {
        this.getSalons();
    }


    private getSalons(): void {
        this.service.getSalons(1).subscribe(salons => {
            this.allSalons = salons;
            console.log(this.allSalons.beautyService.designation);
        });
    }
}
