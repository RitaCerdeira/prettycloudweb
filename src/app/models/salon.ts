import {Service} from './service';

export class Salon {
    id: number;
    name: string;
    address: string;
    phoneNumber: string;
    image: string;
    desciption: string;
    latitude: number;
    longitude: number;
    services: Service[];
}
