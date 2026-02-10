import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface CarouselSlide {
  image: string;
  title?: string;
  subtitle?: string;
  link?: string;
}

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './hero-carousel.component.html',
  styleUrl: './hero-carousel.component.css'
})
export class HeroCarouselComponent implements OnInit, OnDestroy {
  slides: CarouselSlide[] = [
    {
      image: 'https://images.unsplash.com/photo-1495570689269-d883b1224443?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      title: 'Fresh from the Harvest',
      subtitle: 'Seasonal picks delivered to your door'
    },
    {
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      title: 'Support Local Farmers',
      subtitle: 'Connect directly with growers in your community'
    },
    {
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
      title: 'Organic & Sustainable',
      subtitle: 'Taste the difference of nature\'s best'
    }
  ];

  currentSlide = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoPlay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  setSlide(index: number): void {
    this.currentSlide = index;
    // Reset timer when manually changing slides
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
