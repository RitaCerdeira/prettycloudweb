import { Component, OnInit } from '@angular/core';
import {Salon} from '../../models/salon';
import {SalonsService} from '../../services/salons.service';

@Component({
    selector: 'app-salons',
    templateUrl: './salons.component.html',
    styleUrls: ['./salons.component.css']
})

export class SalonsComponent implements OnInit {

    salons: Salon[];


    constructor(private salonService: SalonsService) { }

    ngOnInit() {
        this.getSalons();
    }

    private getSalons() {
        this.salonService.getAllSalons().subscribe(salons => {
            this.salons = salons;
        });
    }
}
