import {Service} from './service';
import {Salon} from './salon';

export class SalonPerService {
    id: number;
    salon: Salon[];
    beautyService: Service;
    price: number;
    desciption: string;
}
