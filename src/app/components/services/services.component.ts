import { Component, OnInit } from '@angular/core';
import {Service} from '../../models/service';
import {BeautyServiceService} from '../../services/beauty-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {

    private service = new Service();
    private services: Service[];

    constructor(private serviceService: BeautyServiceService,
                private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit() {
        this.getServices();
    }

    getServices(): void {
        this.serviceService.getServices().subscribe(services => {
            this.services = services;
            console.log(this.services);
        });
    }
}
