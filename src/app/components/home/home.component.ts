import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCarouselComponent } from '../hero-carousel/hero-carousel.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroCarouselComponent, ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { }
