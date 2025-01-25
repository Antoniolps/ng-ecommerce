export class User{ 
    id?: number;
    email?: string;
    username?: string;
    password?: string;
    name?: Name;
    address?: Address;
    phone?: string;
}

class Name {
  first?: string;
  last?: string;
}

class Address {
  city?: string;
  street?: string;
  number?: number;
  zipcode?: string;
  geolocation?: GeoLocation;
}

class GeoLocation {
  lat?: string;
  long?: string;
}