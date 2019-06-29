import {SalonPerService} from './salonPerService';

export class Salon {
    id: number;
    name: string;
    address: string;
    phoneNumber: string;
    image: string;
    description: string;
    latitude: number;
    longitude: number;
    services: SalonPerService[];
}
