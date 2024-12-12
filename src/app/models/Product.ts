export class Product {
    id?: number;
    title?: string;
    price?: number;
    description?: string;
    category?: string;
    image?: string;
    rating?: Rating;
}

class Rating{
    rate?: number;
    count?: number;
}