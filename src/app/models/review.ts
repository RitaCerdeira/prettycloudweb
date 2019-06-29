import {Client} from './client';
import {Salon} from './salon';

export class Review {
    id: number;
    rating: number;
    comment: string;
    client: string;
    salon: Salon;
}
