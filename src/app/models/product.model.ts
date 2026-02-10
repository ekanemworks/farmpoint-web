export interface Product {
  id: number;
  name: string;
  sellerName: string;
  sellerLocation: string;
  price: number;
  dateAdded: Date;
  imageUrl: string;
  description?: string;
  rating?: number;
  reviewCount?: number;
  inStock?: boolean;
}
