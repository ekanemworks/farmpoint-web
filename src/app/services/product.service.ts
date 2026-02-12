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
        return this.http.get<any>(this.apiUrl).pipe(
            map(res => {
                if (Array.isArray(res)) return res;
                if (res && res.data && Array.isArray(res.data)) return res.data;
                if (res && res.products && Array.isArray(res.products)) return res.products;
                return [];
            })
        );
    }

    getProductById(id: number): Observable<Product | undefined> {
        return this.getProducts().pipe(
            map(products => products.find(p => p.id === id))
        );
    }
}
