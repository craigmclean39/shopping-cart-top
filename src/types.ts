export interface Product {
  directory: string;
  category: string;
  name: string;
  description: {
    preview: string;
    short: string;
    long: string;
  };
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

export interface ShopCategoryProps {
  category: Category;
}

export interface CartItemProps {
  item: Purchase;
}

export interface ProductPreviewCardProps {
  product: Product;
}

export interface Purchase {
  name: string;
  price: number;
  colorIndex: number;
  colorName: string;
  quantity: number;
  image: string;
}

export interface Order {
  items: Purchase[];
}
