import { Component, OnInit } from '@angular/core';
import {Salon} from '../../models/salon';
import {ActivatedRoute, Router} from '@angular/router';
import {SalonsService} from '../../services/salons.service';
import {Review} from '../../models/review';

@Component({
    selector: 'app-salon-details',
    templateUrl: './salon-details.component.html',
    styleUrls: ['./salon-details.component.css']
})

export class SalonDetailsComponent implements OnInit {

    private salon = new Salon();
    private review = new Review();

    constructor(private route: ActivatedRoute, private router: Router, private service: SalonsService) { }

    ngOnInit() {
        this.getSalon();
    }

    private getSalon() {
        const id = +this.route.snapshot.paramMap.get('num');
        this.service.getSalonDetails(id).subscribe(salon => {
            this.salon = salon;
        });
    }

    onSubmit() {
        this.review.client = null;
        this.review.salon = this.salon;
        console.log(this.review);
        this.service.addReviews(this.review).subscribe(response => {
            console.log(response);
        });
        this.router.navigate(['/salons']);
    }
}
