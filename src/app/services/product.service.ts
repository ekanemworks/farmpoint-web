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
            imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Vine-ripened organic tomatoes, perfect for salads and sauces. Grown without pesticides in the sunny valleys of California.',
            rating: 4.8,
            reviewCount: 124,
            inStock: true
        },
        {
            id: 2,
            name: 'Fresh Strawberries',
            sellerName: 'Berry Best Co.',
            sellerLocation: 'Oregon, USA',
            price: 4.50,
            dateAdded: new Date('2023-10-26'),
            imageUrl: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Sweet and juicy strawberries picked at peak ripeness. Great for desserts, smoothies, or just eating fresh.',
            rating: 4.9,
            reviewCount: 89,
            inStock: true
        },
        {
            id: 3,
            name: 'Local Honey',
            sellerName: 'Bee Happy Apiary',
            sellerLocation: 'Vermont, USA',
            price: 8.00,
            dateAdded: new Date('2023-10-20'),
            imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Raw, unfiltered honey from local wildflowers. Contains natural enzymes and pollen. A healthy alternative to processed sugar.',
            rating: 5.0,
            reviewCount: 210,
            inStock: true
        },
        {
            id: 4,
            name: 'Fresh Spinach',
            sellerName: 'Leafy Greens',
            sellerLocation: 'Washington, USA',
            price: 1.99,
            dateAdded: new Date('2023-10-27'),
            imageUrl: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Crisp and tender spinach leaves, washed and ready to eat. Excellent for salads or sautéing.',
            rating: 4.5,
            reviewCount: 45,
            inStock: true
        },
        {
            id: 5,
            name: 'Red Apples',
            sellerName: 'Orchard Hill',
            sellerLocation: 'New York, USA',
            price: 3.25,
            dateAdded: new Date('2023-10-22'),
            imageUrl: 'https://images.unsplash.com/photo-1568212628464-9d562dc629c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Crunchy and sweet red apples, fresh from the orchard. A classic snack that everybody loves.',
            rating: 4.7,
            reviewCount: 156,
            inStock: true
        },
        {
            id: 6,
            name: 'Carrots',
            sellerName: 'Rooted Farms',
            sellerLocation: 'Colorado, USA',
            price: 1.50,
            dateAdded: new Date('2023-10-28'),
            imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            description: 'Freshly dug carrots with sweet flavor and vibrant color. Perfect for roasting, snacking, or juicing.',
            rating: 4.6,
            reviewCount: 78,
            inStock: true
        }
    ];

    constructor() { }

    getProducts(): Observable<Product[]> {
        return of(this.products);
    }

    getProductById(id: number): Observable<Product | undefined> {
        return of(this.products.find(p => p.id === id));
    }
}
