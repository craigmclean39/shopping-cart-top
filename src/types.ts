export interface Product {
  directory: string;
  category: string;
  name: string;
  description: string[];
  colors: string[];
  heroImages: string[];
  detailImages: string[];
  price: number;
  sizes: string[];
  activities: string[];
}

export interface Category {
  category: string;
  items: Product[];
}
