export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    rating: Rating;
    description: string;
    image: string;
}

export interface Rating{
    count: number;
    rate: number;
}

export class CartProduct {
    product: Product;
    quantity: number;
  
    constructor(product: Product, quantity: number) {
      this.product = product;
      this.quantity = quantity;
    }
}
