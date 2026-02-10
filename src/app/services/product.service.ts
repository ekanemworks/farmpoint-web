import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private products: Product[] = [
        {
            id: 1,
            name: 'Organic Tomatoes',
            sellerName: 'Green Valley Farm',
            sellerLocation: 'California, USA',
            price: 2.99,
            dateAdded: new Date('2023-10-25'),
            imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 2,
            name: 'Fresh Strawberries',
            sellerName: 'Berry Best Co.',
            sellerLocation: 'Oregon, USA',
            price: 4.50,
            dateAdded: new Date('2023-10-26'),
            imageUrl: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 3,
            name: 'Local Honey',
            sellerName: 'Bee Happy Apiary',
            sellerLocation: 'Vermont, USA',
            price: 8.00,
            dateAdded: new Date('2023-10-20'),
            imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 4,
            name: 'Fresh Spinach',
            sellerName: 'Leafy Greens',
            sellerLocation: 'Washington, USA',
            price: 1.99,
            dateAdded: new Date('2023-10-27'),
            imageUrl: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 5,
            name: 'Red Apples',
            sellerName: 'Orchard Hill',
            sellerLocation: 'New York, USA',
            price: 3.25,
            dateAdded: new Date('2023-10-22'),
            imageUrl: 'https://images.unsplash.com/photo-1568212628464-9d562dc629c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 6,
            name: 'Carrots',
            sellerName: 'Rooted Farms',
            sellerLocation: 'Colorado, USA',
            price: 1.50,
            dateAdded: new Date('2023-10-28'),
            imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ];

    constructor() { }

    getProducts(): Observable<Product[]> {
        return of(this.products);
    }
}
