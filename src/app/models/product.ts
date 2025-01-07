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
