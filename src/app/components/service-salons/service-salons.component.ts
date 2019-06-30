/*
* List of salons that offer a service
*
**/

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BeautyServiceService} from '../../services/beauty-service.service';
import {SalonPerService} from '../../models/salonPerService';
import {Service} from '../../models/service';

@Component({
    selector: 'app-service-salons',
    templateUrl: './service-salons.component.html',
    styleUrls: ['./service-salons.component.css']
})

export class ServiceSalonsComponent implements OnInit {

    public beauty = new Service();

    constructor(private route: ActivatedRoute,
                private router: Router,
                private service: BeautyServiceService) { }

    ngOnInit() {
        this.getSalons();
    }


    private getSalons(): void {
        const id = +this.route.snapshot.paramMap.get('num');
        this.service.getSalons(id).subscribe(salons => {
            this.beauty = salons;
        });
    }
}
