export class Product {
    id?: number;
    title?: string;
    price?: number;
    category?: string;
    rating?: Rating;
    description?: string;
    image?: string;
}

export class Rating{
    count?: number;
    rate?: number;
}

export class CartProduct {
    product: Product;
    quantity: number;
  
    constructor(product: Product, quantity: number) {
      this.product = product;
      this.quantity = quantity;
    }
}
