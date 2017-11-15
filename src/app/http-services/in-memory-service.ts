import { Hero } from './../models/Hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            {
                id: 1, name: 'Pishuwa L'
            },
            {
                id: 2, name: 'Pestalozi K'
            },
            {
                id: 3, name: 'Mostej T'
            },
            {
                id: 4, name: 'Nediyanzi E'
            },
            {
                id: 5, name: 'Lesta E'
            },
            new Hero(6, 'Awaneji T')
        ];

        return { heroes };
    }
}