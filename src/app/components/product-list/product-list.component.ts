import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, MatGridListModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;
  cols$!: Observable<number>;

  constructor(private productService: ProductService, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();

    // Responsive grid columns
    this.cols$ = this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).pipe(
      map(result => {
        if (result.breakpoints[Breakpoints.XSmall]) {
          return 1;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          return 2;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          return 3;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          return 4;
        }
        return 5;
      }),
      shareReplay()
    );
  }
}
