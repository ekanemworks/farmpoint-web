import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private router: Router) { }

  viewDetails(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    console.log('Navigating to product:', this.product.id);
    this.router.navigate(['/product', this.product.id]);
  }

  addToCart(event: Event): void {
    event.stopPropagation();
    console.log('Adding to cart:', this.product.name);
    // Add to cart logic here
  }
}
