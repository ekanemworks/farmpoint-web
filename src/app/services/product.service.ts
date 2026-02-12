import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private apiUrl = 'http://localhost/farmpoint-php-backend/api/products/list.php';
    private products: Product[] = [
        // ... keeping mock data for reference/fallback if needed
    ];

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiUrl);
    }

    getProductById(id: number): Observable<Product | undefined> {
        // Ideally, there should be a detail endpoint like list.php?id=, 
        // but for now we'll fetch all and find the one.
        return this.http.get<Product[]>(this.apiUrl).pipe(
            map(products => products.find(p => p.id === id))
        );
    }
}
